.header {
    width: 100%;
    padding-top: 62px;
}

.heroSplit {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    height: calc(100vh - 62px);
    min-height: 500px;
    max-height: 900px;
}

/* ── FINANCIERO ── */
.heroFin {
    background: #0d0d0d;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
}

.heroFinBg {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.heroFinBg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.28;
    display: block;
}

.heroFinOverlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.55) 45%, rgba(13,13,13,0.15) 100%);
}

.heroFinInner {
    position: relative;
    z-index: 2;
    padding: 40px 44px;
    display: flex;
    flex-direction: column;
}

/* ── EYEBROW ── */
.heroEyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(243,244,248,0.4);
    margin-bottom: 16px;
}

.eyebrowDot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
}

.dotRed { background: #a20021; }
.dotGray { background: #666; }

/* ── TITULOS ── */
.heroTitle {
    font-size: clamp(32px, 3.2vw, 52px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.025em;
    color: #F3F4F8;
    margin-bottom: 14px;
}

.heroTitleEm {
    color: #a20021;
    font-style: italic;
}

.heroTitleRE {
    font-size: clamp(30px, 3vw, 48px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.025em;
    color: #F3F4F8;
    margin-bottom: 14px;
}

.heroSub {
    font-size: 13px;
    line-height: 1.65;
    color: rgba(243,244,248,0.5);
    margin-bottom: 22px;
    max-width: 340px;
}

/* ── BOTONES ── */
.heroMainBtns {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 14px;
}

.heroBtnRed {
    padding: 10px 22px;
    background: #a20021;
    color: #F3F4F8;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 2px;
    transition: .2s;
}
.heroBtnRed:hover { background: #c0002a; }

.heroBtnGhost {
    padding: 9px 18px;
    color: rgba(243,244,248,0.55);
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid rgba(243,244,248,0.18);
    border-radius: 2px;
    transition: .2s;
}
.heroBtnGhost:hover { color: #F3F4F8; border-color: rgba(243,244,248,0.4); }

.heroBtnGhostRE {
    padding: 10px 22px;
    background: rgba(255,255,255,0.1);
    color: #F3F4F8;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 2px;
    transition: .2s;
}
.heroBtnGhostRE:hover { background: rgba(255,255,255,0.18); }

.heroBtnGold {
    padding: 9px 18px;
    color: #D4A017;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid rgba(212,160,23,0.4);
    border-radius: 2px;
    transition: .2s;
}
.heroBtnGold:hover { background: #D4A017; color: #0d0d0d; }

/* ── ECO LINKS ── */
.heroEco {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 18px;
}

.ecoBtn {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .5px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 3px 8px;
    border-radius: 2px;
    border: 1px solid transparent;
    transition: .2s;
}

.ecoBtnRed { color: #F3F4F8; border-color: rgba(162,0,33,0.5); background: rgba(162,0,33,0.12); }
.ecoBtnRed:hover { background: #a20021; }
.ecoBtnGhost { color: rgba(243,244,248,0.38); border-color: rgba(243,244,248,0.14); }
.ecoBtnGhost:hover { color: #F3F4F8; }
.ecoBtnGold { color: #D4A017; border-color: rgba(212,160,23,0.33); }
.ecoBtnGold:hover { background: #D4A017; color: #0d0d0d; }

.heroCnv {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(243,244,248,0.18);
}

/* ── DIVISOR ── */
.heroDivider {
    background: rgba(243,244,248,0.07);
    width: 1px;
    align-self: stretch;
}

/* ── REAL ESTATE ── */
.heroRE {
    background: #161616;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
}

.heroREBg {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.heroREBg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.32;
    display: block;
}

.heroREOverlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(22,22,22,0.97) 0%, rgba(22,22,22,0.55) 45%, rgba(22,22,22,0.1) 100%);
}

.heroREInner {
    position: relative;
    z-index: 2;
    padding: 40px 44px;
    display: flex;
    flex-direction: column;
}

/* ── RESPONSIVE ── */
@media only screen and (max-width: 850px) {
    .heroSplit {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1px auto;
        height: auto;
        max-height: none;
    }

    .heroFin {
        min-height: 65vh;
    }

    .heroFinInner {
        padding: 28px 24px;
    }

    .heroRE { min-height: 65vh; }

    .heroREInner { padding: 28px 24px; }

    .heroTitle { font-size: 30px; }
    .heroTitleRE { font-size: 28px; }
}
