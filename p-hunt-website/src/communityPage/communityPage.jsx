import { useState, useEffect } from "react";
import styles from "./community.module.css";
import { topics, discussions, socialLinks } from "./sidebarInformation";
import axios from "axios"

export const Community = () => {

    const [discussionData, setDiscussionData] = useState([])
    const [showTimeFilters, setTimeFilters] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios({
            method: "get",
            mode: "no-cors",
            url: `http://localhost:2345/discussion?page=${page}`,
        })
            .then(function (response) {
                setDiscussionData([...discussionData,...response.data.data])
            })
            .catch(function (error) {
                console.log(error);
            });

    },[page])



    let count = 100;
    return (
        <>
            {/* top section  div details */}
            <div className={styles.TopParentContainer} onClick={() => setTimeFilters(false)}>
                <div className={styles.topLeft}>
                    <div className={styles.topLeftHeading}>
                        <p>Learn and engage with the Product Hunt community</p>
                    </div>
                    <div className={styles.topLeftDescription}>
                        Before joining or starting a discussion remember to always be civil.
                        Treat others with respect. Do not use the discussions board for
                        direct sales or self-promotion. You are free to share your products
                        and product ideas for feedback. 🙌
                    </div>
                    <div>
                        <button>New discussion</button>
                    </div>
                </div>
                <div className={styles.topRight}>
                    <img src="./CommunityPageImages/coverImageFirstBlock2.png" alt="" />
                </div>
            </div>

            {/* community and bottom  section div  */}
            <div className={styles.layoutContainer} onClick={() => showTimeFilters ? setTimeFilters(false) : ""} >
                {/*left section-  community and search and filters sections */}
                <div className={styles.leftmainContainer}>
                    {/* filters and search bar */}
                    <div className={styles.filtersContainers}>
                        <div className={styles.applyFilters}>
                            <div className={styles.filterSearch}>
                                <button>
                                    <div className={styles.filterKeysfirst}>New</div>
                                </button>
                                <button>
                                    <div className={styles.filterKeysSecond}>Popular</div>
                                </button>
                            </div>
                            <div className={styles.weekWrapper} onClick={() => setTimeFilters(!showTimeFilters)}>
                                <div className={styles.timeFilter}>
                                    <div>week</div>
                                    <svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.556 0L0 1.556 4.444 6 8.89 1.556 7.334 0l-2.89 2.889z"></path>
                                    </svg>
                                </div>


                            </div>
                            {/* timeFilters */}
                            <div className={styles.timeFilterWrapperDropDown} style={{ display: showTimeFilters ? "block" : "none" }}>
                                <img src="./CommunityPageImages/notchTriangle2.jpg" alt="" />
                                <div >
                                    <p>Now</p>
                                    <p>Week</p>
                                    <p>Month</p>
                                    <p>Year</p>
                                    <p>All</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.searchBoxContainer}>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path>
                            </svg>
                            <input type="text" placeholder="Search Discussions" />
                        </div>
                    </div>

                    {/* community feed section */}
                    <div>
                        {
                            discussionData.map(discussion => (


                                <div className={styles.eachItemDetail} key={count++}>
                                    {/* user image */}
                                    <div className={styles.userImageWrapper}>
                                        <div>
                                            <div>
                                                <a href="a" className={styles.userImageAncleTab}>
                                                    <div>
                                                        <div>
                                                            <img
                                                                src={discussion.imageUrl}
                                                                alt=""
                                                                className={styles.userAvatarCommunity}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* votes */}
                                    <button className={styles.votesButton}>
                                        <div className={styles.buttonDetailWrapper}>
                                            <div className={styles.upperArrowImage}></div>
                                            <div className={styles.votesCountContainer}>{ discussion.votes}</div>
                                        </div>
                                    </button>
                                    {/* details */}
                                    <div>
                                        <button className={styles.titleContainer}>
                                            <div className={styles.titleDivContainer}>
                                                <span className={styles.titleSpanContainer}>
                                                    {discussion.title}
                                                </span>
                                            </div>
                                        </button>
                                        {/* contact details and comments */}
                                        <div className={styles.detailsDivContainer}>
                                            <div>{discussion.userName}</div>
                                            <div>{discussion.comments} replies</div>
                                            <div>{discussion.days}  ago</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/*right section -  search and filter by given options - topics */}
                <div className={styles.rightmainContainer}>
                    {/* topics */}
                    <div>
                        <div className={styles.headerofSection}>Topics</div>
                        {
                            topics.map(topic => (
                                <div className={styles.topicsContainer}>
                                    <a href="w" className={styles.eachTopicWrapper}>
                                        <div className={styles.topicDetails}>
                                            <div className={styles.topicAvatar}>
                                                <img
                                                    src={`./CommunityPageImages/${topic.source}`}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={styles.topicNameStyle}>{topic.title}</div>
                                        </div>
                                    </a>
                                </div>))
                        }
                        <hr className={styles.lineBreak} />
                    </div>
                    {/* new discussions */}
                    <div>
                        <div className={styles.headerofSection}>New Discussions</div>
                        <div>
                            {
                                discussions.map(discussion => (
                                    <div className={styles.eachdiscussion}>
                                        <div className={styles.newDiscussionTopic}>{discussion.title}</div>
                                        <div className={styles.newDiscussionDetails}>
                                            <div>
                                                <div className={styles.smallerUpperArrow}></div>
                                                <div className={styles.votesCountOfDiscussion}> {discussion.votes}</div>
                                            </div>
                                            <div style={{ marginLeft: "16px" }}>.</div>
                                            <div>{discussion.Comments} Comment</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <hr className={styles.lineBreak} />
                    </div>
                    {/* other links */}
                    <div>
                        <div className={styles.otherLinksWraper}>
                            {
                                socialLinks.map(item => (
                                    <>
                                        <p>{item}</p>
                                        <p>.</p>
                                    </>
                                ))
                            }
                        </div>
                        <div className={styles.copywrightInformation}>@2021 PRODUCT HUNT
                            <hr className={styles.lineBreak} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
