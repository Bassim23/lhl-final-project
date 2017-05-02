class NotificationChannel < ApplicationCable::Channel
  def subscribed
    # subscribe to their own user id channel
    stream_from "notification_channel"
    stream_from "notification_channel#{current_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def notify (data, id)
    # broadcasts to specific user channel
    # @schedule = Schedule.find(params[:id])
    # @user = @schedule.trip.user_id
    # puts "WHATUP IS ME"
    # puts @user
    ActionCable.server.broadcast "notification_channel#{id}", message: data['message']
  end
end
