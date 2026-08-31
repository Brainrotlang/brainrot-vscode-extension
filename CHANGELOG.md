# Change Log

All notable changes to the "brainrot" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

- Sync highlighting with Brainrot v0.4.0: add the file I/O builtins
  (`crackopen`, `peaceout`, `doomscroll`, `shitpost`, `skim`, `yapto`,
  `zoink`, `whereami`, `throwback`, `itsjoever`, `bricked`, `bustcache`) and
  the `SAUCE` type name; remove the deleted `whopper` (extern) and `cringe`
  (goto) keywords.
- Highlight `gamba` and the v1 string builtins (`yaplen`, `yapcat`, `yapcmp`,
  `yapidx`).
- Fix syntax highlighting drift against the brainrot language: remove the
  never-real `sus` keyword, add the missing `bet` builtin, and fix the
  builtin-function regex to apply word boundaries to every alternative.
- Initial release