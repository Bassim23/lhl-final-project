class NotificationChannel < ApplicationCable::Channel
  def subscribed
    # subscribe to their own user id channel
    stream_from "notification_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def notify (data)
    # broadcasts to specific user channel
    ActionCable.server.broadcast "notification_channel", message: data['message']
  end
end
