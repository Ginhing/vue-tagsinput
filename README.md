# vue-tagsinput
[![][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/vue-tagsinput.svg
[npm-url]: https://npmjs.org/package/vue-tagsinput

>kerboard supported(left, right, backspace, tab).
![](anim.gif)

## Requirement
- vue: `>= 1.0.0`

## Usage
```html
<div id="example">
    <tags-input
        :tags.sync="tags"
        :insert="insertTag"
        :render="renderTag"
        :read-only="setRO"
        track-by="text"
    ></tags-input>
</div>
```

## Example
[Live example](http://www.webpackbin.com/4J2rbEYZZ)

## Props
- tags(array, required): to contain your tags
- klass(object): override the class name (see below)
- insert(func): transform the text of tag-object before insert your tags-array
- render(func): transform your tag-object into a text to display
- readOnly(func): set your tag-object read only or not
- trackBy(string): a field of tag-object to dedupe.

## Events
- focus.vue-tagsinput
- blur.vue-tagsinput

## Class Names
```javascript
{
    container: 'tags-input',
    input: 'input',
    gap: 'gap',
    tag: 'tag'
}
```

## License

[MIT](LICENSE)
