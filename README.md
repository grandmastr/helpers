# @grandmastr/helpers

Super handy JavaScript utilities for frontend development.

Note: This is a work in progress.

## Install

```shell
yarn add @grandmastr/helpers
```

## Usage

```ts
import { debounce } from '@grandmastr/helpers';
```

## Available Helpers
- `debounce`: Ensures that your function is not fired too quickly and is delayed until a certain amount of time has passed.
- `emptyList`: Returns an empty list object, useful when you need a clean slate array.
- `extractLink`: Parses and extracts URLs from text content.
- `getExtension`: Provides the extension of a given filename.
- `isKindOf`: Checks the type of a given object and returns a boolean.
- `isObjectEmpty`: Determines whether an object has no properties.
- `mimeTypes`: A comprehensive list of MIME types and their corresponding file extensions.
- `truncateText`: Trims a string to a specified length and appends an ellipsis or specified characters.

## Building
```shell
yarn build
```

## Testing
```shell
yarn test
```


> MIT ©  GitHub
> [@grandmastr](https://github.com/grandmastr) &nbsp;&middot;&nbsp; Twitter
> [@grandmastr_](https://x.com/grandmastr_)
