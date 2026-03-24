"use client";
import { useEffect } from "react";

export function ClientInteractions() {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById("nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile nav toggle
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const toggleNav = () => {
      navToggle?.classList.toggle("open");
      navLinks?.classList.toggle("open");
    };
    navToggle?.addEventListener("click", toggleNav);
    navLinks?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle?.classList.remove("open");
        navLinks?.classList.remove("open");
      });
    });

    // How It Works tabs
    const tabBtns = document.querySelectorAll<HTMLElement>(".tab-btn[data-tab]");
    const tabPanels = document.querySelectorAll<HTMLElement>(".tab-panel[data-panel]");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab;
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabPanels.forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document
          .querySelector(`.tab-panel[data-panel="${target}"]`)
          ?.classList.add("active");
      });
    });

    // Solutions tabs
    const solTabs = document.querySelectorAll<HTMLElement>(".sol-tab[data-sol]");
    const solPanels = document.querySelectorAll<HTMLElement>(".sol-panel[data-sol-panel]");
    solTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.sol;
        solTabs.forEach((t) => t.classList.remove("active"));
        solPanels.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        document
          .querySelector(`.sol-panel[data-sol-panel="${target}"]`)
          ?.classList.add("active");
      });
    });

    // Carousel
    const track = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");
    const dotsContainer = document.getElementById("carouselDots");

    if (track && prevBtn && nextBtn && dotsContainer) {
      const cardWidth = 260 + 16;
      let currentIndex = 0;

      const getVisibleCount = () => {
        const wrapperWidth = track.parentElement?.offsetWidth || 800;
        return Math.floor(wrapperWidth / cardWidth);
      };
      const getMaxIndex = () =>
        Math.max(0, track.querySelectorAll(".cap-card").length - getVisibleCount());

      const updateDots = () => {
        dotsContainer
          .querySelectorAll(".carousel-dot")
          .forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
          });
      };

      const goTo = (index: number) => {
        const maxIdx = getMaxIndex();
        currentIndex = Math.max(0, Math.min(index, maxIdx));
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateDots();
      };

      const buildDots = () => {
        dotsContainer.innerHTML = "";
        const maxIdx = getMaxIndex();
        for (let i = 0; i <= maxIdx; i++) {
          const dot = document.createElement("div");
          dot.className = "carousel-dot" + (i === currentIndex ? " active" : "");
          dot.addEventListener("click", () => goTo(i));
          dotsContainer.appendChild(dot);
        }
      };

      prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
      nextBtn.addEventListener("click", () => goTo(currentIndex + 1));

      let startX = 0;
      let isDragging = false;
      track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; isDragging = true; }, { passive: true });
      track.addEventListener("touchend", (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(currentIndex + (diff > 0 ? 1 : -1));
      });

      let mouseStartX = 0;
      let isMouseDragging = false;
      track.addEventListener("mousedown", (e) => { mouseStartX = e.clientX; isMouseDragging = true; e.preventDefault(); });
      document.addEventListener("mouseup", (e) => {
        if (!isMouseDragging) return;
        isMouseDragging = false;
        const diff = mouseStartX - e.clientX;
        if (Math.abs(diff) > 50) goTo(currentIndex + (diff > 0 ? 1 : -1));
      });

      buildDots();
      window.addEventListener("resize", () => { buildDots(); goTo(currentIndex); });
    }

    // Scroll animations
    const fadeEls = document.querySelectorAll(
      ".section-header, .why-card, .trust-item, .int-card, .cap-card, .stat-card"
    );
    fadeEls.forEach((el) => el.classList.add("fade-up"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    fadeEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
