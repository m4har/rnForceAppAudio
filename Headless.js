import firebase from 'react-native-firebase';
import Sound from 'react-native-sound'
import invokeApp from 'react-native-invoke-app'
import VolumeControl from "react-native-volume-control"

export default async (message) => {
    let volData = 0
    volData = await VolumeControl.getVolume()
    VolumeControl.change(1)    
    const whoosh = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {return}
      whoosh.play((success) => {
        if (success) {
          VolumeControl.change(volData)
        } else {
        }
      });
    });
    const yourObject = { route: 'data' };
    invokeApp({data: yourObject})
    const channel = new firebase.notifications.Android.Channel(
      'app_notif',
      'app_notif',
      firebase.notifications.Android.Importance.Max
    )
      // .setSound('notifpartner')
      .enableLights(true)
      .enableVibration(true)
    firebase.notifications().android.createChannel(channel)
    const newNotification = new firebase.notifications.Notification({
      // sound: 'notifpartner'
    })
      .setNotificationId(message.messageId)
      .setTitle('title')
      .setBody('body')
      // .setSound('notifpartner')
      // .setData({ screen })
      .android.setGroup('data')
      .android.setChannelId(channel.channelId)
      // .android.setBigText(body)
      .android.setAutoCancel(true)
      .android.setSmallIcon('ic_launcher')
      .android.setLargeIcon('ic_launcher')
      .android.setCategory(firebase.notifications.Android.Category.Alarm)
      .android.setColorized(true)
      .android.setColor('#f432ff')
      .android.setBigPicture('https://t-ec.bstatic.com/images/hotel/max1024x768/626/62617148.jpg')
    firebase.notifications().getBadge()
    firebase.notifications().android.createChannel(channel)
    firebase.notifications().displayNotification(newNotification)
    return Promise.resolve();
}