let span = document.getElementsByClassName("session")[0]
let count = 0;
let clearTime;
let start = () => {
    clearTime = setInterval(() => {
        count++;
        span.textContent = count + "s"
        // if(count==100){
        //     stop()
        // }
    }, 1000)
}
// let stop=()=>{
//     clearInterval(clearTime)
//     start()
//     count=0;
// }

start()
let div = document.getElementsByClassName('notification')[0]
let notifications = [
    {
        class: "send-emails",
        title: "Send emails",
        content: "Onboard new users. Reactivate churning customers."
    },
    {
        class: "receive-notifications",
        title: "Receive Notifications",
        content: "Notify yourself on Telegram or Slack."
    },
    {
        class: "write-to-notion",
        title: "Write to Notion",
        content: "Automatically write data to your Notion database."
    },
    {
        class: "webhooks",
        title: "Webhooks",
        content: "Build what you can imagine."
    }
]
notifications.map(value => {
    return (
        div.innerHTML += `<div class="${value.class} flex items-center">
       <div class="tick">
           <img src="images/tick.png" alt="">
       </div>
       <div>
           <h3>${value.title}</h3>
           <p style="margin:8px 0 0 0;">${value.content}</p>
       </div>
   </div>`
    )
})
let cards = document.getElementsByClassName("cards")[0]
let items = [
    {
        img: "images/speed-gauge.png",
        title: "Fast Dashboard",
        content: "No more staring at loading screens. Splitbee gives you the UX you deserve."
    },
    {
        img: "images/lock.png",
        title: "Based in Europe",
        content: "Your data is stored securely in Europe. We never share your data or sell it to a third-party."
    },
    {
        img: "images/heart.png",
        title: "Easy to integrate",
        content: "One line of code and you are done.No need to be an expert."
    },
    {
        img: "images/feather.png",
        title: "Light on your page",
        content: "We assure your site stays fast. Splitbee is small in size (<4kb) and runs on a global network."
    },
    {
        img: "images/real-time.png",
        title: "Insights in real-time",
        content: "See your dashboard update live. Understand users as they come and go."
    },

]
items.map(value => {
    return (
        cards.innerHTML += `
       <div style="width:350px;">
       <img src="${value.img}"/> 
       <h3>${value.title}</h3>
       <p>${value.content}</p>
       </div>
        `
    )
})

let test = [
    {
        class: "split-test",
        title: "Split Test",
        content: "Balance traffic between multiple pages"
    },
    {
        class: "variation-test",
        title: "Variation Test",
        content: "Try different wordings. Swap buttons, images and more"
    },
    {
        class: "custom-code-test",
        title: "Custom Code Test",
        content: "Get programmatic access to test groups with Splitbee.js"
    }
]
let divTest=document.getElementsByClassName("test")[0]
test.map(value => {
    return (
        divTest.innerHTML += `<div class="${value.class} flex items-center">
       <div class="tick">
           <img src="images/tick.png" alt="">
       </div>
       <div>
           <h3>${value.title}</h3>
           <p style="margin:8px 0 0 0;">${value.content}</p>
       </div>
   </div>`
    )
})
