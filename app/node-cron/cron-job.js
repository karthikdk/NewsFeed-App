const cron=require('node-cron')
const axios=require('axios')
const Article = require('../models/article-model')


const task=()=>{
    
    //Times Of India Top Stories Feed
    cron.schedule('*/2 * * * *', async()=>{
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeedstopstories.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            console.log(data)
            const articles = data.items.map(article => {
                return {...article, 
                    pubDate : article.pubDate.split(' ').join('T'),
                    source : 'Times of India', 
                    category : 'latest'
                }
            })
        const insertedArticles = await Article.insertMany(articles, {ordered : false})
        }catch(error){
            if(error.code !== 11000){
                console.log(error)
            }
        }
        console.log('running a task every two minutes',new Date())
    })

    //Times of India Most Recent Stories Feed
    cron.schedule('*/2 * * * *',async()=>{
        try {
            const { data }=await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeedmostrecent.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`) 
            const articles=data.items.map(article=>{
            return{ ...article,
                    pubDate : article.pubDate.split(' ').join('T'), 
                    description : article.description.split('>')[1],
                    source : 'Times of India', 
                    category : 'recent'
                  }
           })
           const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }   
    })

    //Times of India Cricket Feed
    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeeds/54829575.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                    pubDate : article.pubDate.split(' ').join('T'), 
                    description : article.description.split('</a>')[1],
                    source : 'Times of India', 
                    category : 'cricket'
                }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })

    //Times of India Environment Feed
    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeeds/2647163.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            console.log(data)
            const articles = data.items.map(article => {
                return {...article, 
                    pubDate : article.pubDate.split(' ').join('T'), 
                    description : article.description.split('</a>')[1],
                    source : 'Times of India', 
                    category : 'environment'
                }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })


    //Times Of India Education feed
    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeeds/913168846.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                    pubDate : article.pubDate.split(' ').join('T'), 
                    description : article.description.split('</a>')[1],
                    source : 'Times of India', 
                    category : 'education'
                }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })
}

module.exports=task