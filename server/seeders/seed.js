const db = require('../config/connection');
const { User, inquiry } = require('../models');
const userSeeds = require('./userSeeds.json');
const inquirySeeds = require('./inquirySeeds.json');

db.once('open', async () => {
  try {
    await inquiry.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < inquirySeeds.length; i++) {
      const { _id, inquiryAuthor } = await inquiry.create(inquirySeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: inquiryAuthor },
        {
          $addToSet: {
            inquiry: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
