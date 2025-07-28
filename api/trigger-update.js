import Pusher from 'pusher'

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true
})

export default async (req, res) => {
    console.log(123)
  await pusher.trigger('update-channel', 'new-deployment', {})
  res.status(200).send('Update triggered')
}