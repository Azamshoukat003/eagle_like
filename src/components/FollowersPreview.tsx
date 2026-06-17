import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import type { PreviewItem } from '../data/productData'

type FollowersPreviewProps = {
  items: PreviewItem[]
}

export function FollowersPreview({ items }: FollowersPreviewProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragStateRef = useRef({
    pointerId: -1,
    startX: 0,
    startLeft: 0,
  })
  const [scrollMetrics, setScrollMetrics] = useState({
    left: 0,
    max: 0,
    clientWidth: 1,
    scrollWidth: 1,
  })

  const syncScrollMetrics = () => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    const max = Math.max(scroller.scrollWidth - scroller.clientWidth, 0)

    setScrollMetrics({
      left: scroller.scrollLeft,
      max,
      clientWidth: scroller.clientWidth,
      scrollWidth: scroller.scrollWidth,
    })
  }

  useEffect(() => {
    syncScrollMetrics()

    window.addEventListener('resize', syncScrollMetrics)

    return () => {
      window.removeEventListener('resize', syncScrollMetrics)
    }
  }, [items])

  const scrollAmount = Math.max(scrollMetrics.clientWidth * 0.82, 180)
  const thumbWidthPercent = Math.max(
    (scrollMetrics.clientWidth / scrollMetrics.scrollWidth) * 100,
    14,
  )
  const thumbLeftPercent =
    scrollMetrics.max > 0
      ? (scrollMetrics.left / scrollMetrics.max) * (100 - thumbWidthPercent)
      : 0

  const handleArrowClick = (direction: -1 | 1) => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    scroller.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    })
  }

  const handleTrackClick = (event: MouseEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    const trackBounds = event.currentTarget.getBoundingClientRect()
    const clickRatio = (event.clientX - trackBounds.left) / trackBounds.width

    scroller.scrollTo({
      left: clickRatio * scrollMetrics.max,
      behavior: 'smooth',
    })
  }

  const handleThumbPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const thumb = event.currentTarget

    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startLeft: scrollMetrics.left,
    }

    thumb.setPointerCapture(event.pointerId)
    event.preventDefault()
  }

  const handleThumbPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current
    const track = trackRef.current
    const dragState = dragStateRef.current

    if (
      !scroller ||
      !track ||
      dragState.pointerId !== event.pointerId ||
      scrollMetrics.max <= 0
    ) {
      return
    }

    const thumbWidth = Math.max(
      (scrollMetrics.clientWidth / scrollMetrics.scrollWidth) * track.clientWidth,
      (14 / 100) * track.clientWidth,
    )
    const availableTrackWidth = Math.max(track.clientWidth - thumbWidth, 1)
    const deltaX = event.clientX - dragState.startX
    const nextScrollLeft = Math.min(
      Math.max(
        dragState.startLeft + (deltaX / availableTrackWidth) * scrollMetrics.max,
        0,
      ),
      scrollMetrics.max,
    )

    scroller.scrollLeft = nextScrollLeft
  }

  const handleThumbPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return
    }

    dragStateRef.current.pointerId = -1
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <section className="preview-panel" aria-label="Followers preview">
      <header className="preview-panel__header">
        <div className="preview-panel__title">
          <span className="preview-panel__person" aria-hidden="true">
            <img src="/svgs/profileIcon.png" alt="" />
          </span>
          <span>Followers Preview</span>
        </div>
        <div className="preview-panel__pill">
          <span className="preview-panel__pill-icon" aria-hidden="true">
            <img src="/Star.png" alt="" />
          </span>
          <span>Real Followers</span>
        </div>
      </header>

      <div
        ref={scrollerRef}
        className="preview-scroller"
        onScroll={syncScrollMetrics}
      >
        <div className="preview-list">
          {items.map((item, index) => (
            <article key={`${item.name}-${item.time}-${index}`} className="preview-row">
              <div className="preview-row__avatar" style={{ background: item.background }}>
                {item.image ? (
                  <img
                    className="preview-row__avatar-image"
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                  />
                ) : (
                  item.initials
                )}
              </div>
              <div className="preview-row__copy">
                <span className="preview-row__name">{item.name}</span>
                <span>started following you.</span>
              </div>
              <span className="preview-row__time">{item.time}</span>
            </article>
          ))}
        </div>
      </div>

      <footer className="preview-scroll">
        <button
          className="preview-scroll__arrow"
          type="button"
          aria-label="Scroll followers preview left"
          onClick={() => handleArrowClick(-1)}
          disabled={scrollMetrics.left <= 0}
        >
          <img src="/svgs/arrrowiconleft.svg" alt="" aria-hidden="true" />
        </button>
        <div
          ref={trackRef}
          className="preview-scroll__track"
          aria-hidden="true"
          onClick={handleTrackClick}
        >
          <div
            className="preview-scroll__thumb"
            style={{
              width: `${thumbWidthPercent}%`,
              left: `${thumbLeftPercent}%`,
            }}
            onPointerDown={handleThumbPointerDown}
            onPointerMove={handleThumbPointerMove}
            onPointerUp={handleThumbPointerUp}
            onPointerCancel={handleThumbPointerUp}
          />
        </div>
        <button
          className="preview-scroll__arrow"
          type="button"
          aria-label="Scroll followers preview right"
          onClick={() => handleArrowClick(1)}
          disabled={scrollMetrics.left >= scrollMetrics.max}
        >
          <img src="/svgs/arrowiconright.svg" alt="" aria-hidden="true" />
        </button>
      </footer>
    </section>
  )
}
