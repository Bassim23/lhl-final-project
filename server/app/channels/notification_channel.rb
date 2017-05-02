class NotificationChannel < ApplicationCable::Channel
  def subscribed
    # subscribe to their own user id channel
    stream_from "notification_channel"
    stream_from "notification_channel#{current_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def notify (data)
    # broadcasts to specific user channel
    @schedule = Schedule.find(data['id'])
    user = @schedule.trip.user_id
    ActionCable.server.broadcast "notification_channel#{user}", message: data['message']
  end
end
