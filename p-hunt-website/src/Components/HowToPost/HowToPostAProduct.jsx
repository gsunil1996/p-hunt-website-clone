import React from 'react'
import styles from "./HowToPostAProduct.module.css"

function HowToPostAProduct() {

    return (
        <div className={styles.parent}>

            
            <div className={styles.grid1}>
                <div className={styles.heading}>
                    <p>Product Hunt</p>
                    <p>Pro Tips</p>

                    <p>Welcome to Product Hunt, a place to discover, share</p>
                    <p>and geek out about new products and technology.</p>
                    <p>Before hunting a product, take a peek at these rules of</p>
                    <p>thumb.</p>
                </div>
                <div>
                    <img className={styles.cat} src="https://ph-static.imgix.net/ProTipsCat.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&fit=max&dpr=2" alt="noImage" />
                </div>
                
            </div>
            
            <div className={styles.flex1}>

                <div>
                    <img src="https://ph-static.imgix.net/protips-page/question-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                </div>
                
                <div className={styles.text}>
                    <p>What can I post on Product Hunt?</p>


                    <p>Product Hunt is for new or relatively unknown tech products. As much as we love</p>
                    <p>Twitter.com, it probably isn’t a good fit for the homepage today.</p>

                    <p>Please refrain from posting events, single paid courses, deal/discount sites, blog</p>
                    <p>posts, private groups, services, and other things that are not products, as relevant</p>
                    <p>as they may be for the community.</p>


                    <p>Products that are available to use, download, or purchase immediately get priority.</p>
                    <p>Those that have not yet launched rarely get featured on the homepage, but could</p>
                    <p>be a great option for  <a href="/"> Ship </a>  or <a href="/"> Product Hunt Early </a> </p>

                    <p>Curious to explore the most upvoted products? Enter * into the search bar, but</p>
                    <p>don’t tell anyone about our little secret. ;</p>

                </div>

            </div>

            <div className={styles.flex2}>
             
                <div>
                    <img src="https://ph-static.imgix.net/protips-page/question-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                </div>
                   
                <div className={styles.text1}>

                    <p>What about product updates?</p>

                    <p>Once featured, products cannot be reposted with exception to significant updates</p>
                    <p>or product pivots</p>
                    

                    <p>Of course product development isn’t static, so we will consider <b> significant </b> updates</p>
                    <p>as new product submissions by contacting us <a href="/"> hello@producthunt.com </a> (please note</p>
                    <p>we usually suggest at least 6 months between product updates)</p>

                </div>

            </div>

            <div className={styles.flex2}>

                <div>
                    <img src="https://ph-static.imgix.net/protips-page/question-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                </div>
                   
                <div className={styles.text2}>

                    <p>What time does the homepage work on?</p>
                    
                    <p>The homepage runs on Pacific Time and resets at midnight daily</p>

                    <p>If you want to post a product bright and early but are in another timezone, you can</p>
                    <p>always schedule your post up to 7 days in advance</p>
                    
                </div>
                
            </div>
            
            <div className={styles.flex2}>
             
                <div>
                    <img src="https://ph-static.imgix.net/protips-page/copyright-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text3}>

                    <p>Get your copy and images right</p>

                    <p>Taglines matter. The best taglines are succinct, describe the product, and avoid</p>
                    <p>cliche descriptions like "email on steroids" or superfluous buzzwords like "a beautiful</p>
                    <p>SoLoMo livestreaming experience."</p>

                    <p>Please use proper grammar and spellling.</p>

                    <p>GIFs are great but please refrain from using flashy thumbnails. Your thumbnail</p>
                    <p>should represent your product or brand. The media gallery can be used for further</p>
                    <p>imagery (we recommend at least 2)</p>

                </div>

            </div>

            <div className={styles.flex2}>
                
                <div>
                    <img src="https://ph-static.imgix.net/protips-page/question-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text4}>

                    <p>How does a product make the homepage?</p>

                    <p>What’s featured on the frontpage is driven by the community. The ranking algo</p>
                    <p>rithm takes into account numerous factors, including time since posting and fraudu</p>
                    <p>lent voting ring activity.</p>

                </div>

            </div>
            
            <div className={styles.flex2}>

                <div>
                    <img src="https://ph-static.imgix.net/protips-page/convo-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text5}>
                
                    <p>Start a conversation</p>

                    <p>After posting a product, add a comment to kick off conversation</p>

                    <p>If you know who made a product, invite them to join the discussion! It’s always fun</p>
                    <p>to hear the backstory directly from product makers</p>

                </div>

            </div>

            <div className={styles.flex2}>
                
                <div>
                    <img src="https://ph-static.imgix.net/protips-page/sharing-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text6}>
                  
                    <p>Sharing and Upvoting</p>


                    <p>Feel free to share products you post (or find) but don’t ask for upvotes. Gaming</p>
                    <p>may result in the product being removed from the site. People should upvote what</p>
                    <p>they think is useful or interesting, not because they’re peer pressured or</p>
                    <p>incentivised.</p>
                    

                    <p>Posting a product to Product Hunt is free! Taking money to hunt a product or up</p>
                    <p>vote one could result in that product being taken down.</p>

                </div>
            </div>
            
            <div className={styles.flex2}>
                
                <div>
                    <img src="https://ph-static.imgix.net/protips-page/plusone-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text7}>

                    <p>Get involved and add value</p>
                    
                    <p>Sharing your baby (i.e., product) with the world is incredibly exciting and nerve-</p>
                    <p>wracking. Treat makers with respect but also don’t hesitate to challenge each other</p>
                    <p>and ask difficult questions.</p>

                </div>
            </div>
            
            <div className={styles.flex2}>

                <div>
                    <img src="https://ph-static.imgix.net/protips-page/respect-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text8}>

                    <p>Be respectful</p>

                    <p>We won't accept discrimination of any kind or overtly offensive comments. Be nice</p>
                    <p>and if you see bad behavior, please let us know at <a href="/"> hello@producthunt.com </a> or flag</p>
                    <p>the the comment/post directly.</p>

                    
                    <p>Comments that contain threatening/violent/abusive language or directly/indirectly</p>
                    <p>attacks individuals/groups will be removed.</p>

                </div>

            </div>

            <div className={styles.flex2}>

                <div>
                    <img src="https://ph-static.imgix.net/protips-page/personal-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text9}>
                    
                    <p>Personal accounts only</p>

                    <p>Anyone who creates a personal account (no company or branded accounts please!)</p>
                    <p>can post a product they’ve made or discovered by hitting the ‘Post’ button on the</p>
                    <p>top right of the page.</p>

                    <p>If you’re using a company or branded account, you will not have access to post or</p>
                    <p>comment. We ask that you please create a personal account to interact with the</p>
                    <p>community. We foster a person to person environment to keep the community au</p>
                    <p>thentic. We ask that folks talk to one another as themselves.</p>


                    <p>If you've just created an account, you’ll need to wait 1 week to post a product, alter</p>
                    <p>natively you can sign up to our newsletter to jump start your full access.</p>

                </div>

            </div>

            <div className={styles.flex2}>

                <div>
                    <img src="https://ph-static.imgix.net/protips-page/convo-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text10}>

                    <p>Join or start a Discussion</p>

                    <p>Want to ask the community for help? Join or start a <a href="/"> Discussion </a> to crowd source</p>
                    <p>knowledge from other makers and product lovers</p>

                </div>

            </div>

            <div className={styles.flex2}>

              <div>
                    <img src="https://ph-static.imgix.net/protips-page/collection-icon.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&fit=max&dpr=2" alt="noImage" />
                    
                </div>
                   
                <div className={styles.text11}>

                    <p>Create collections</p>
                    
                    <p>Create collections. Get creative (like <a href="/">Lucy</a>). The more interesting or useful the better.</p>
                    <p>Get out there and share your ideas. Talk to us. We love to hear your feedback via</p>

                    <p>hello@producthunt.com or on Twitter at <a href="/"> @ProductHunt. </a> </p>

                </div>
            </div>

            <div><img className={styles.border} src="https://ph-static.imgix.net/protips-page//hor-line.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&fit=max&dpr=2" alt="noImage" /></div>

            <div className={styles.bottom}>
                <p>Still have questions?</p>
                <p>Check out the full FAQ’s page</p>
                <button>FREQUENTLY ASKED QUESTIONS</button>
            </div>
           
            <div className={styles.footer}>
            <p> Copyright © 2021 - Product Hunt Terms of Service Privacy and Cookies FAQ </p>
            <p>Twitter Facebook Instagram</p>
          </div>
            
        </div>
    );
}

export default HowToPostAProduct
