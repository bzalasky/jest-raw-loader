module.exports = {
  // process() and processAsync() methods of a custom transformer module cannot
  // return a string anymore. They must always return an object.
  //
  // https://jestjs.io/docs/28.x/upgrading-to-jest28#transformer
  process: (content) => ({
    code: "module.exports = " + JSON.stringify(content),
  }),
};
