import React from 'react'
import styles from "./AboutPage.module.css";


function AboutPage() {
    return (
      <>
        <div className={styles.parent}>
          <div className={styles.top}>
            <p>
              Product Hunt surfaces the best new products, every day. It's a
              place for
            </p>
            <p>
              product-loving enthusiasts to share and geek out about the latest
              mobile
            </p>
            <p>apps, websites, hardware projects, and tech creations.</p>
          </div>
          <div className={styles.faq}>
            <p>Have a question? Check out the F.A.Q.</p>
          </div>

          <div className={styles.flexing1}>
            <div>
              <p>[...] Product Hunt has become a must-read site in</p>
              <p>Silicon Valley.</p>
              <img
                src="https://ph-static.imgix.net/publications/theverge.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=119&h=20&fit=max&dpr=2"
                alt="noImage"
              />
            </div>

            <div>
              <p>[...] Product Hunt is an online community that</p>
              <p>caters to the tech product fanatics.</p>
              <img
                src="https://ph-static.imgix.net/publications/venturebeat.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=167&h=22&fit=max&dpr=2"
                alt="noImage"
              />
            </div>
          </div>

          <div className={styles.flexing2}>
            <div>
              <p>[Product Hunt] ballooned in popularity since its</p>
              <p>humble beginnings and has since become a</p>
              <p>destination site where folks could submit and vote</p>
              <p>on their favorite tech products.</p>
              <img
                className={styles.logo}
                src="https://ph-static.imgix.net/publications/techcrunch.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=161&h=20&fit=max&dpr=2"
                alt="noImage"
              />
            </div>

            <div>
              <p>[...] Product Hunt has evolved from a small email</p>
              <p>list into a must-read for those in the tech and</p>
              <p>startup space to discover the next great product.</p>
              <img
                className={styles.logo1}
                src="https://ph-static.imgix.net/publications/businessinsider.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=75&h=30&fit=max&dpr=2"
                alt="noImage"
              />
            </div>
          </div>

          <div className={styles.team}>
            <h1>Team</h1>
          </div>

          <div className={styles.griding}>
            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/73648/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Ashley Higgins</p>
                <p>CEO</p>
                <p>@ahiggz</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/2/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Ryan Hoover</p>
                <p>Founder</p>
                <p>@rrhoover</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/1074431/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Naman Kumar</p>
                <p>Software Engineer</p>
                <p>@hereisnaman</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/3305107/1724ed8b-75be-427b-ae9b-503efe215755?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Sruthi Vaylay</p>
                <p>UX Research</p>
                <p>@sruthi_vaylay</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/3413326/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Alex Shebar</p>
                <p>Community</p>
                <p>@alexshebar</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/234457/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Emily Snowdon (née Hodgins)</p>
                <p>Operations</p>
                <p>@ejsnowdon</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/165894/21d8f757-780d-490b-a7ac-8fa63cc71e85?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Leandro</p>
                <p>Community</p>
                <p>@leandro8209</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/151696/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Jacqueline von Tesmar</p>
                <p>Community</p>
                <p>@jacqvon</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/3266338/b8540ad4-c650-4d42-9c29-3bdf0f5e7dc7?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Andrew Radev</p>
                <p>Software Engineer</p>
                <p>@andrew_radev</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/91873/74baa594-858c-417c-9415-956d28dcf60b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Josh Buckley</p>
                <p>President</p>
                <p>@joshbuckley</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/39775/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Rahul</p>
                <p>Software Engineer</p>
                <p>@rahulmfg</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/4248/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Julie Chabin</p>
                <p>Designer</p>
                <p>@syswarren</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/94352/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Vladimir Vladimirov</p>
                <p>Software Engineer</p>
                <p>@devladinci</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/1509649/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>David</p>
                <p>Software Engineer</p>
                <p>@zyqxd</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/805906/cd68ecef-cc11-4d9f-bdc0-733febef461c?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Raj</p>
                <p>Software Engineer</p>
                <p>@rajsb_</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/3250422/f7522c88-eae3-4b61-9fbd-f84f5ecb6a78?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Emil Emilov</p>
                <p>Software Engineer</p>
                <p>@emilov</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/3192969/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Sarah Wright</p>
                <p>Content Lead</p>
                <p>@sarah_wright7</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/62068/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Radoslav Stankov</p>
                <p>Head of Engineering</p>
                <p>@rstankov</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/3208719/68104344-e9db-4051-8df6-e4ff7d553742?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Aditya</p>
                <p>Community</p>
                <p>@adityavsc</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/138764/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Kyle Frost</p>
                <p>Designer</p>
                <p>@kylefrost</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/1457505/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Tim Carambat</p>
                <p>Software Engineer</p>
                <p>@tim_carambat</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/1132395/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Sharath Kuruganty</p>
                <p>Community</p>
                <p>@5harath</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/1439429/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Lanre Akinyemi</p>
                <p>Sales / Business Development</p>
                <p>@lanre_akinyemi</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/294167/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Jake Crump</p>
                <p>Community</p>
                <p>@jakecrump</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/169410/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Seth Williams</p>
                <p>Designer</p>
                <p>@sethbwilliams</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/514245/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Calum Webb</p>
                <p>Community</p>
                <p>@calum</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/3475458/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Michael Silber</p>
                <p>Product Manager</p>
                <p>@product_at_producthunt</p>
              </div>
            </div>

            <div className={styles.block}>
              <div>
                <img
                  src="https://ph-avatars.imgix.net/84553/2f8fefb7-5fce-4c43-a543-a001132f8fdc?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
                  alt="noImage"
                />
              </div>
              <div>
                <p>Gabe Perez</p>
                <p>Social Media</p>
                <p>@gabe</p>
              </div>
            </div>
          </div>

          <div>
            <h1>Thanks</h1>
          </div>

          <div className={styles.griding2}>
            <img
              src="https://ph-avatars.imgix.net/20046/b81930ee-47d6-45b6-81d9-a3f8c4fe83d3?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/108/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/31387/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/151665/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/2081/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/254861/4ee091d6-41de-4764-a845-d1b8e4dd5207?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/788110/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/16056/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/24323/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/862/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/10349/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/787/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/47229/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/25634/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/47518/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/269621/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/85553/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/250100/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/71/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/86915/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/3/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/382113/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/8412/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/103684/c4664739-0164-4e79-a8cc-9d83d36cdf33?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/98516/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/1114145/e9ccb6c1-e413-4676-b85b-6d52d2007efe?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/22891/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/946/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/4557/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/239747/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/67838/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/8319/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/12/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/1405568/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/213986/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/1/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/8483/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/13621/b11b1b13-5aa4-4b67-af95-d65a3c5f2d10?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/48747/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/10748/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/186194/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/963533/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/239385/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/1973817/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/1880/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />
          </div>

          <div>
            <h1>Angel Investors</h1>
          </div>

          <div className={styles.flexing3}>
            <img
              src="https://ph-avatars.imgix.net/8660/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/29570/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImge"
            />

            <img
              src="https://ph-avatars.imgix.net/666245/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/33659/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/28/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/9/f0d8220f-0b16-4495-b558-f9a5d2d88a23?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-avatars.imgix.net/8052/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="noImage"
            />
          </div>

          <div>
            <h1>Backed By</h1>
          </div>

          <div className={styles.flexing4}>
            <img
              src="https://ph-static.imgix.net/investors/googleventures.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=164&h=69&fit=max&dpr=2"
              alt="noImge"
            />

            <img
              src="https://ph-static.imgix.net/investors/andreessenhorowitz.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=156&h=43&fit=max&dpr=2"
              alt="noImage"
            />
          </div>

          <div className={styles.flexing5}>
            <img
              src="https://ph-static.imgix.net/investors/crunchfund.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=250&h=27&fit=max&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-static.imgix.net/investors/betaworks.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=232&h=71&fit=max&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-static.imgix.net/investors/ycombinator.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=211&h=42&fit=max&dpr=2"
              alt="noImage"
            />
          </div>

          <div className={styles.flexing6}>
            <img
              src="https://ph-static.imgix.net/investors/tradecraft.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=209&h=118&fit=max&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-static.imgix.net/investors/cowboyventures.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=118&h=117&fit=max&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-static.imgix.net/investors/slowventures.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=189&h=142&fit=max&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-static.imgix.net/investors/svangel.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=131&h=72&fit=max&dpr=2"
              alt="noImage"
            />
          </div>

          <div className={styles.flexing7}>
            <img
              src="https://ph-static.imgix.net/investors/ludlowventures.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=277&h=33&fit=max&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-static.imgix.net/investors/agr.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=165&h=65&fit=max&dpr=2"
              alt="noImage"
            />

            <img
              src="https://ph-static.imgix.net/investors/greylockpartners.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=224&h=29&fit=max&dpr=2"
              alt="noImage"
            />
          </div>

          <div className={styles.flexing8}>
            <div>
              <h1>Brand Guidelines</h1>
              <p>Download vector and .png versions of our logo and mark</p>
              <p>for certain uses.</p>
              <button>VIEW MORE</button>
            </div>
            <div>
              <img
                className={styles.pLogo}
                src="https://ph-static.imgix.net/ph-branding-guides-1.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&fit=max&dpr=2"
                alt="noImage"
              />
            </div>
          </div>

          <div className={styles.footer}>
            <p> Copyright © 2021 - Product Hunt Terms of Service Privacy and Cookies FAQ </p>
            <p>Twitter Facebook Instagram</p>
          </div>
        </div>
      </>
    );
}

export default AboutPage
