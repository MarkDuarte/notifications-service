import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This a notification',
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
