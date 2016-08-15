'use strict'

module.exports = (slapp) => {

  let help = `
  Enter \`/pybot outcome\` to give outcome buttons
  Enter hi or hello and mention or direct message to return hello world
  Enter \`/pybot hello\` to also return hello world 
  `;

  slapp.command('/pybot', /help/, (msg) => {
    msg.respond(msg.body.response_url, help)
  });

  slapp.message('help', ['direct_message'], (msg) => {
    msg.say(help)
  });

  slapp.message('hello|hi', ['direct_message'], (msg) => {
    msg.say(["Hello World","Hi", "I like timesheets"])
  });
};