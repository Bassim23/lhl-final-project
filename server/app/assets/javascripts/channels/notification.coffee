App.notification = App.cable.subscriptions.create "NotificationChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    alert(data['message'])

  notify: (message, id) ->
   @perform 'notify', message: message, id: id

  $(document).on 'click', '[data-behavior~=notifcation]', (event) ->
    scheduleId = $('#request-to-join-button').data('id')
    App.notification.notify "New trips request", scheduleId
    event.preventDefault()