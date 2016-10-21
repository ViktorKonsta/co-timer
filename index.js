module.exports = function xtimer(options = {}) {

  if (!options.callback) {
    throw new Error("options{}.callback expected but got nothing")
  }

  const callback = options.callback
  const args = options.args || []

  const timeout = options.timeout
    ? Number(options.timeout)
    : 0

  const interval = options.interval
    ? Number(options.interval)
    : 100

  if (timeout === 0) {
    callback(...args)
  } else {
    setTimeout(callback, timeout, ...args)
  }

  setInterval(callback, interval, ...args)

  return {
    callback
  }

}
