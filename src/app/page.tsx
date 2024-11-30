import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.title}>
          체리오네일
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.event}>
          <h1>이달의 리뷰어 이벤트</h1>
          <div className={styles['event-description']}>
            <p>매달 <b>베스트리뷰어</b>를 직접 선정하여 다음<br/>젤시술 <u>50% 할인</u>을 적용해드립니다</p>
            <p className={styles['event-warning']}>이벤트는 별도의 공지없이 내용이 변경 또는 종료될 수 있습니다.</p>
          </div>
          {/* <div>
            <button>진행 중인 이벤트 보기</button>
          </div> */}
        </section>
        <section className={styles['the-hall-of-fame']}>
          <h1>체리오 <b>Pick</b> 리뷰</h1>
          <article className={styles['introduce']}>
            <div>
              <Image
                src={'/images/cute-rabbit.jpg'}
                height={120}
                width={120}
                alt="cherryo"
              />
              <h2>11월, 12월 리뷰어 진행 중</h2>
              <p>관리 받은 후 마음에 드셨다면 사진과 함께 리뷰를 남겨주세요!</p>
            </div>
          </article>
        </section>
        <section>
          <article></article>
        </section>
      </main>
      <nav className={styles['link']}>
        <a href="https://m.place.naver.com/nailshop/1310284813/home">네이버예약</a>
        <a href="https://www.instagram.com/cherry.o.nail">인스타그램</a>
        <a href="https://blog.naver.com/cherryonail">네이버블로그</a>
        <a href="https://www.youtube.com/@cherryOnail/shorts">유튜브</a>
      </nav>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
