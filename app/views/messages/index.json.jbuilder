json.messages(Message.all.load) do |message|
  json.partial! 'messages/message', message: message
end
