App.notification = App.cable.subscriptions.create "NotificationChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    alert(data['message'])

  notify: (message) ->
   @perform 'notify', message: message

  $(document).on 'click', '[data-behavior~=notifcation]', (event) ->
    App.notification.notify "New trips request"
    event.preventDefault()
