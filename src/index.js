/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, selectedLayer) {
    if (!(selectedLayer.type === "text" && selectedLayer.textStyles.length > 1)) {
  		return;
  	}

    var options = {
        language: context.getOption("language"),
        flag: context.getOption("flag")
    };

    var lineEnding;
    var declarationKeyword;
    var code;

    if (options.language === "java") {
      code = `SpannableString spannableString = new SpannableString("${selectedLayer.content}");\n`;
      lineEnding = ";\n";
      declarationKeyword = "new ";
    } else if (options.language === "kotlin") {
      code = `val spannableString = SpannableString("${selectedLayer.content}")\n`;
      lineEnding = "\n";
      declarationKeyword = "";
    }

    var flag = `Spannable.SPAN_${options.flag.toUpperCase()}`

    for (var i = 0; i < selectedLayer.textStyles.length; i++) {
      var rangedTextStyle = selectedLayer.textStyles[i];
      var start = rangedTextStyle.range.start;
      var end = rangedTextStyle.range.end;

      code += `\nspannableString.setSpan(${declarationKeyword}AbsoluteSizeSpan(${rangedTextStyle.textStyle.fontSize}, true), ${start}, ${end}, ${flag})${lineEnding}`;
      code += `spannableString.setSpan(${declarationKeyword}ForegroundColorSpan(${androidColorFrom(rangedTextStyle.textStyle.color)}), ${start}, ${end}, ${flag})${lineEnding}`;

      var robotoSpan = robotoSpanFor(rangedTextStyle.textStyle.fontFace);
      if (robotoSpan) {
        code += `spannableString.setSpan(${declarationKeyword}StyleSpan(${robotoSpan.style}), ${start}, ${end}, ${flag})${lineEnding}`;
        code += `spannableString.setSpan(${declarationKeyword}TypefaceSpan("${robotoSpan.family}"), ${start}, ${end}, ${flag})${lineEnding}`;
      }
    }

    return {
      code: code,
      language: options.language
    };
}

function comment(context, text) {
    return `// ${text}`;
}

export default {
    layer,
    comment
};

function androidColorFrom(color) {
  return `Color.argb(${Math.round(color.a * 255)}, ${color.r}, ${color.g}, ${color.b})`;
}

function robotoSpanFor(fontFace) {
    var robotoRegex = /^Roboto(\w*)?-(?:Regular)?(Thin|Light|Medium|Black)?(Bold)?(Italic)?$/;
    var fontStyles = ["Typeface.NORMAL", "Typeface.BOLD", "Typeface.ITALIC", "Typeface.BOLD_ITALIC"];
    var fontFamilies = {
        "undefined": "sans-serif",
        "condensed": "sans-serif-condensed",
        "mono": "monospace"
    };

    var parts = fontFace.match(robotoRegex);

    if (!parts || !fontFamilies[(`${parts[1]}`).toLowerCase()]) {
        return;
    }

    var family = parts[1];
    var variant = parts[2];
    var isBold = parts[3];
    var isItalic = parts[4];

    return {
        family: fontFamilies[(`${family}`).toLowerCase()] + (variant ? `-${variant.toLowerCase()}` : ""),
        style: fontStyles[(isBold ? 1 : 0) + (isItalic ? 2 : 0)]
    };
}
