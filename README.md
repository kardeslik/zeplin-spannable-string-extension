# Zeplin Spannable String Extension

Generates Spannable Strings for texts with multiple styles.

Supported spans are:
 - [AbsoluteSizeSpan](https://developer.android.com/reference/android/text/style/AbsoluteSizeSpan)
 - [ForegroundColorSpan](https://developer.android.com/reference/android/text/style/ForegroundColorSpan)
 - [StyleSpan](https://developer.android.com/reference/android/text/style/StyleSpan)
 - [TypefaceSpan](https://developer.android.com/reference/android/text/style/TypefaceSpan)

You can add the extension to your project from [here](https://extensions.zeplin.io/emmar/spannable-string-extension).

## Options

#### Language

Supports both Kotlin and Java languages. Default language is Kotlin but you can change it from extension settings on Zeplin.

#### Span Flag

One of the following span flags is used while generating code:
 - [SPAN_EXCLUSIVE_EXCLUSIVE](https://developer.android.com/reference/android/text/Spanned.html#SPAN_EXCLUSIVE_EXCLUSIVE) (default)
 - [SPAN_EXCLUSIVE_INCLUSIVE](https://developer.android.com/reference/android/text/Spanned.html#SPAN_EXCLUSIVE_INCLUSIVE)
 - [SPAN_INCLUSIVE_EXCLUSIVE](https://developer.android.com/reference/android/text/Spanned.html#SPAN_INCLUSIVE_EXCLUSIVE)
 - [SPAN_INCLUSIVE_INCLUSIVE](https://developer.android.com/reference/android/text/Spanned.html#SPAN_INCLUSIVE_INCLUSIVE)

## Samples

#### Kotlin Output

```kotlin
val spannableString = SpannableString("This is a layer containing multiple text styles")

spannableString.setSpan(AbsoluteSizeSpan(24, true), 0, 7, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(ForegroundColorSpan(Color.argb(255, 0, 0, 0)), 0, 7, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(StyleSpan(Typeface.NORMAL), 0, 7, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(TypefaceSpan("sans-serif"), 0, 7, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)

spannableString.setSpan(AbsoluteSizeSpan(20, true), 8, 15, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(ForegroundColorSpan(Color.argb(255, 208, 2, 27)), 8, 15, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(StyleSpan(Typeface.BOLD), 8, 15, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(TypefaceSpan("sans-serif-condensed"), 8, 15, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)

spannableString.setSpan(AbsoluteSizeSpan(26, true), 16, 35, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(ForegroundColorSpan(Color.argb(255, 245, 166, 35)), 16, 35, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(StyleSpan(Typeface.ITALIC), 16, 35, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(TypefaceSpan("monospace"), 16, 35, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)

spannableString.setSpan(AbsoluteSizeSpan(30, true), 36, 46, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(ForegroundColorSpan(Color.argb(255, 126, 211, 33)), 36, 46, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(StyleSpan(Typeface.BOLD_ITALIC), 36, 46, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
spannableString.setSpan(TypefaceSpan("sans-serif"), 36, 46, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)

```

#### Java Output

```java
SpannableString spannableString = new SpannableString("This is a layer containing multiple text styles");

spannableString.setSpan(new AbsoluteSizeSpan(24, true), 0, 7, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new ForegroundColorSpan(Color.argb(255, 0, 0, 0)), 0, 7, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new StyleSpan(Typeface.NORMAL), 0, 7, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new TypefaceSpan("sans-serif"), 0, 7, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);

spannableString.setSpan(new AbsoluteSizeSpan(20, true), 8, 15, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new ForegroundColorSpan(Color.argb(255, 208, 2, 27)), 8, 15, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new StyleSpan(Typeface.BOLD), 8, 15, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new TypefaceSpan("sans-serif-condensed"), 8, 15, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);

spannableString.setSpan(new AbsoluteSizeSpan(26, true), 16, 35, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new ForegroundColorSpan(Color.argb(255, 245, 166, 35)), 16, 35, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new StyleSpan(Typeface.ITALIC), 16, 35, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new TypefaceSpan("monospace"), 16, 35, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);

spannableString.setSpan(new AbsoluteSizeSpan(30, true), 36, 46, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new ForegroundColorSpan(Color.argb(255, 126, 211, 33)), 36, 46, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new StyleSpan(Typeface.BOLD_ITALIC), 36, 46, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
spannableString.setSpan(new TypefaceSpan("sans-serif"), 36, 46, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);

```

## Development

This extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create, test and publish extensions.

To learn more about creating Zeplin extensions, [see documentation](https://github.com/zeplin/zeplin-extension-documentation).
