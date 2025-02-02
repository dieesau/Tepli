import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import instance from '../axios/axiosController';

const SideBarComponent = () => {
    const [allNews, setNews] = useState([]);

    async function getNews() {
        await instance.get('/news')
            .then((response) => setNews(response.data));
    }

    useEffect(() => {
        getNews().catch();
    }, []);

    return (
        <div>
            {(allNews.slice(0, 5).map((news) => (
                <React.Fragment key={news.newsId}>
                    <div className="wrapper">
                        <Link to={`/news/${news.newsId}`}><h4>{news.title}</h4></Link>
                        <p id="dateSpan">{news.newsDate}</p>
                        <div className="text-justify, sideBarNewsElement">{`${news.body.substring(0, 100)}...`}</div>
                        <hr />
                    </div>
                </React.Fragment>
            )))}
        </div>
    );
};
export {SideBarComponent};
