const Emotion = require("../models/Emotion");
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const emotions = [
    new Emotion({
        name: 'Happy',
        contents: [
            { id: 1, title: 'Dance A Jig', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=HgGAzBDE454' },
            { id: 2, title: 'Happy', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=ZbZSe6N_BXs' },
            { id: 3, title: 'Hello', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=5ZCgbGgA-_8' },
            { id: 4, title: 'Dog Can\'t Stop Smiling', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=rwgwSomR0B8' },
            { id: 5, title: 'Laughing Ethan', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=mqkdw8-D0wY' },
            { id: 6, title: 'Ace Ventura', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=7SE13_8vSqE' },
            { id: 7, title: 'Lullaby', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=5BDVvB7Xx1w' },
            { id: 8, title: 'Not Good At School', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=6YkNEIiy2W8' },
            { id: 9, title: 'Not Anti-Dog', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=jTf03_rzVt0' },
            { id: 10, title: 'What A Wonderful World', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=A3yCcXgbKrE' },
        ],
    }),
    new Emotion({
        name: 'Sad',
        contents: [
            { id: 11, title: 'The Approaching Night', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=lvzEA0BMwf0' },
            { id: 12, title: 'Ellie and Carl', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=F2bk_9T482g&feature=youtu.be' },
            { id: 13, title: 'Breaks My Heart', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=DQuAsShq68Q' },
            { id: 14, title: 'Ten Years And Still Waiting', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=amR_gAXVkNY' },
            { id: 15, title: 'For The Love Of', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=zyKFGcvkJxE' },
            { id: 16, title: 'Rainy Days', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=AVXejOoPECA' },
            { id: 17, title: 'Goodbye', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=BPaTaEN2wxY' },
            { id: 18, title: 'Simba Finds Mufasa', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=84Irg8xn4bg' },
            { id: 19, title: 'Animations Have Feelings, Too.', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=Iva9xZL9TJE' },
            { id: 20, title: 'Saddest Disney Scene, Ever', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=Q-8MbgMS6jo' },   
        ],
    }),
    new Emotion({
        name: 'Motivated',
        contents: [
            { id: 21, title: 'Just Do It', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=ZXsQAXx_ao0' },
            { id: 22, title: 'Can We Fix It? Yes We Can!', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=MP-W3eg4V1Y' },
            { id: 23, title: 'It\'s My Life', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=B4KCdo4NYI4' },
            { id: 24, title: 'Let\'s Get It', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=-xA84aIAWEk' },
            { id: 25, title: 'Do It For You', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=fBNHHVu5Njo' },
            { id: 26, title: 'Pump Up The Jam', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=9EcjWd-O4jI' },
            { id: 27, title: 'I\'m So Excited', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=8iwBM_YB1sE' },
            { id: 28, title: 'To Excellence', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=aljb6ZXBwV0' },
            { id: 29, title: 'Whatever It Takes', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=M66U_DuMCS8' },
            { id: 30, title: 'Victory', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=pICAha0nsb0' },  
        ],
    }),
    new Emotion({
        name: 'Angry',
        contents: [
            { id: 31, title: 'Inside Out Anger', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=eaJEWGSOD7s' },
            { id: 32, title: 'How To Get Angry A Lot', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=PafEBhLPtGM' },
            { id: 33, title: 'Kisses', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=K8hF7qQE5nQ' },
            { id: 34, title: 'There Goes The Computer', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=HtTUsOKjWyQ' },
            { id: 35, title: 'Stomp Your Feet', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=9mdix2Gts4o' },
            { id: 36, title: 'Why', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=Dp9atyHwQF8' },
            { id: 37, title: 'Temper Tantrum', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=hv1aczlrMsk' },
            { id: 38, title: 'AHHHH!', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=37XeFwHi3mU' },
            { id: 39, title: 'Trunchbull', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=7Dlm97NvWOA' },
            { id: 40, title: 'Angry Translator', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=G6NfRMv-4OY' }, 
        ],
    }),
    new Emotion({
        name: 'Fearful',
        contents: [
            { id: 41, title: 'Do You Like Scary Movies', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=G3lSvJ5RXKA' },
            { id: 42, title: 'Behind You', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=xQxbo85BxnI&feature=youtu.be' },
            { id: 43, title: 'Not For Sensitive Stomachs', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=7wsmc0n8JcY&feature=youtu.be' },
            { id: 44, title: 'Bicycle', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=y_x4mc7kQqE&feature=youtu.be' },
            { id: 45, title: 'Dining Room Or There is Nothing', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=ns1SGo3WCF4' },
            { id: 46, title: 'The Painting', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=JJmWYGR3XY0' },
            { id: 47, title: 'Face-to-face With A Cannibalistic Sect!', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=Lv8WHQwo4GY' },
            { id: 48, title: 'Samara\'s Song', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=7fHIZxIBYbs&feature=youtu.be' },
            { id: 49, title: 'The Nun', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=MZObAm6CexQ' },
            { id: 50, title: 'The Ring', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=8osPqwMQCJQ' },
        ],
    }),
];

let done = 0;

const exit = () => {
    mongoose.disconnect();
}

for (let i = 0; i < emotions.length; i++) {
    emotions[i].save((err, result) => {
        done++;
        if (done === emotions.length) {
            exit();
        }
    });
}
