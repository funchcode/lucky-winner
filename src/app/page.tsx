import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <div>
          체리오네일
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <h1>이달의 리뷰어 이벤트</h1>
          <div>
            <p>정성으로 작성해주시는 리뷰글을 직접 확인하고 매월 한 분을 선정하여 다음 번 시술 50% 할인 이벤트를 진행하고 있습니다.</p>
            <p>* 이벤트는 별도의 공지없이 내용이 변경 또는 종료될 수 있습니다.</p>
          </div>
          <div>
            <button>진행 중인 이벤트 보기</button>
          </div>
        </section>
        <section>
          <article>
            <div>
              <h2>10월 리뷰어</h2>
            </div>
            <div>
              <em>김*희 님</em>
              <div>
                <i>네이버 블로그</i>
                <pre>이리 저리 주저리 주저리. 와우 어쩌고 저쩌고... 블라블라 ...</pre>
                <a href="http://localhost:3000">바로가기</a>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h1>11월 리뷰어</h1>
              <h2>당첨자 발표</h2>
            </div>
            <div>
              <em>정*환 님</em>
              <div>
                <i>영수증 리뷰</i>
                <pre>주저리 주저리 합니다. *^^* 너무 예뻐요. 주저리 주저리 주저리~~!</pre>
              </div>
            </div>
          </article>
          <article>
            <div></div>
          </article>
        </section>
        <section>
          <article></article>
        </section>
      </main>
      <nav>
        <span>인스타그램</span>
        <span>네이버블로그</span>
        <span>유튜브</span>
      </nav>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
