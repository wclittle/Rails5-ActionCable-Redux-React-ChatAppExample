json.messages(Message.limit(10).order("created_at DESC").load.reverse) do |message|
  json.partial! 'messages/message', message: message
end
