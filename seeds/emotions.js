const Emotion = require("../models/Emotion");
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const emotions = [
    new Emotion({
        name: 'Happy',
        contents: [
            { 1: { id: 1, title: 'Stupid Questions', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=q_22tPwd0dE' } },
            { 2: { id: 2, title: 'Ace Ventura', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=7SE13_8vSqE' } },
            { 3: { id: 3, title: 'Dog Can\'t Stop Smiling', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=rwgwSomR0B8' } },
            { 4: { id: 4, title: 'Laughing Ethan', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=mqkdw8-D0wY' } },
            { 5: { id: 5, title: 'Not Anti-Dog', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=jTf03_rzVt0' } },
            { 6: { id: 6, title: 'Not Good At School', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=6YkNEIiy2W8' } },
            { 7: { id: 7, title: 'Adulting', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=SCyTgjcntNM' } },
            { 8: { id: 8, title: 'Saws', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=Tl-VGsmEJyM' } },
            { 9: { id: 9, title: 'Happy', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=ZbZSe6N_BXs' } },
            { 10: { id: 10, title: 'Dance A Jig', emotion: 'Happy', url: 'https://www.youtube.com/watch?v=HgGAzBDE454' } },
            
        ],
    }),
    new Emotion({
        name: 'Sad',
        contents: [
            { 11: { id: 11, title: 'The Approaching Night', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=lvzEA0BMwf0' } },
            { 12: { id: 12, title: 'Fate', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=PtnJfOJGBUw' } },
            { 13: { id: 13, title: 'Sad Wars', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=Xegpetie5AQ' } },
            { 14: { id: 14, title: 'Sports Moments', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=-XYqJH0rwY4' } },
            { 15: { id: 15, title: 'For The Love Of', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=zyKFGcvkJxE' } },
            { 16: { id: 16, title: 'Rainy Days', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=AVXejOoPECA' } },
            { 17: { id: 17, title: 'Heartwarming Sadness', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=5xzGjW_MEms' } },
            { 18: { id: 18, title: 'Top 10 Movies That Are Only Good For Making You Cry', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=7PI9deEMthQ' } },
            { 19: { id: 19, title: 'Animations have feelings, too.', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=Iva9xZL9TJE' } },
            { 20: { id: 20, title: 'Saddest Disney Scene, Ever', emotion: 'Sad', url: 'https://www.youtube.com/watch?v=Q-8MbgMS6jo' } },
            
        ],
    }),
    new Emotion({
        name: 'Motivated',
        contents: [
            { 21: { id: 21, title: 'Let\s Get It', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=-xA84aIAWEk' } },
            { 22: { id: 22, title: 'Victory', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=pICAha0nsb0' } },
            { 23: { id: 23, title: 'Do It For You', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=fBNHHVu5Njo' } },
            { 24: { id: 24, title: 'Pump Up The Jam', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=9EcjWd-O4jI' } },
            { 25: { id: 25, title: 'I\'m So Excited', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=8iwBM_YB1sE' } },
            { 26: { id: 26, title: 'To Excellence', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=aljb6ZXBwV0' } },
            { 27: { id: 27, title: 'It\'s My Life', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=B4KCdo4NYI4' } },
            { 28: { id: 28, title: 'Whatever It Takes', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=M66U_DuMCS8' } },
            { 29: { id: 29, title: 'Just Do It', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=ZXsQAXx_ao0' } },
            { 30: { id: 30, title: 'Can We Fix It? Yes We Can!', emotion: 'Motivated', url: 'https://www.youtube.com/watch?v=MP-W3eg4V1Y' } },
            
        ],
    }),
    new Emotion({
        name: 'Angry',
        contents: [
            { 31: { id: 31, title: 'Inside Out Anger', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=eaJEWGSOD7s' } },
            { 32: { id: 32, title: 'How To Get Angry A Lot', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=PafEBhLPtGM' } },
            { 33: { id: 33, title: 'No', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=iX8pvEVKmmQ' } },
            { 34: { id: 34, title: 'There Goes The Computer', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=HtTUsOKjWyQ' } },
            { 35: { id: 35, title: 'Stomp Your Feet', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=9mdix2Gts4o' } },
            { 36: { id: 36, title: 'Why', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=Dp9atyHwQF8' } },
            { 37: { id: 37, title: 'Temper Tantrum', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=hv1aczlrMsk' } },
            { 38: { id: 38, title: 'AHHHH!', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=37XeFwHi3mU' } },
            { 39: { id: 39, title: 'Trunchbull', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=7Dlm97NvWOA' } },
            { 40: { id: 40, title: 'Angry Translator', emotion: 'Angry', url: 'https://www.youtube.com/watch?v=G6NfRMv-4OY' } },
            
        ],
    }),
    new Emotion({
        name: 'Fearful',
        contents: [
            { 41: { id: 41, title: 'Scary 2019!', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=F0h6nE5ZxX4' } },
            { 42: { id: 42, title: 'I See Dead People', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=QUYKSWQmkrg' } },
            { 43: { id: 43, title: 'Terrifying Scenes', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=frpJPgnp_Cs' } },
            { 44: { id: 44, title: 'Creepy IRL', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=rbNo2PRiExw' } },
            { 45: { id: 45, title: 'Paranormal Activity', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=bb4EKuvtc4Q' } },
            { 46: { id: 46, title: 'Face-to-face with a cannibalistic sect!', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=Lv8WHQwo4GY' } },
            { 47: { id: 47, title: 'Not For Sensitive Stomachs', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=j1oByXmohhU' } },
            { 48: { id: 48, title: 'Boo', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=nt7ic6JJNZ4' } },
            { 49: { id: 49, title: 'Dining Room Or There is Nothing', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=ns1SGo3WCF4' } },
            { 50: { id: 50, title: 'Demons', emotion: 'Fearful', url: 'https://www.youtube.com/watch?v=oEVfREVGcaY' } },
            
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
