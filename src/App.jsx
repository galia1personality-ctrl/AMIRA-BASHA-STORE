import { useMemo, useState } from 'react'

const categories = [
  { name: 'ملابس نسائية', icon: '👗' },
  { name: 'أكسسوارات', icon: '👜' },
  { name: 'أحذية', icon: '👠' },
  { name: 'عطور', icon: '🧴' },
  { name: 'مجوهرا��', icon: '💍' },
  { name: 'حقائب', icon: '🛍️' }
]

const products = [
  {
    id: 1,
    name: 'فستان كلاسيكي أنيق',
    price: 249,
    oldPrice: 299,
    badge: 'خصم 20%',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    category: 'ملابس نسائية',
    colors: ['أسود', 'بيج']
  },
  {
    id: 2,
    name: 'حقيبة يد فاخرة',
    price: 189,
    oldPrice: 229,
    badge: 'الأكثر مبيعاً',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    category: 'حقائب',
    colors: ['بني', 'أسود']
  },
  {
    id: 3,
    name: 'حذاء أنيق للظهر',
    price: 320,
    oldPrice: 390,
    badge: 'جديد',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    category: 'أحذية',
    colors: ['أبيض', 'أسود']
  },
  {
    id: 4,
    name: 'مجموعة عطور',
    price: 140,
    oldPrice: 175,
    badge: 'مميز',
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
    category: 'عطور',
    colors: ['وردي', 'فرنسي']
  }
]

const features = [
  { title: 'توصيل سريع', text: 'توصيل إلى جميع المدن في غضون 48 ساعة' },
  { title: 'دفع آمن', text: 'الدفع نقداً عند الاستلام فقط' },
  { title: 'استرجاع سهل', text: 'إمكانية إرجاع الطلب خلال 7 أيام' },
  { title: 'خدمة عملاء', text: 'متابعة مخصصة لكل طلب' }
]

function App() {
  const [cart, setCart] = useState([])

  const itemCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  )

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  )

  const addToCart = (product) => {
    setCart((current) => {
      const existingIndex = current.findIndex((item) => item.id === product.id)

      if (existingIndex >= 0) {
        const updated = [...current]
        updated[existingIndex].quantity += 1
        return updated
      }

      return [...current, { ...product, quantity: 1 }]
    })
  }

  const updateQty = (id, delta) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-block">
            <span className="brand-mark">A</span>
            <div>
              <p className="brand-name">أميرة باشا</p>
              <small>Style & beauty</small>
            </div>
          </div>

          <nav className="main-nav" aria-label="القائمة الرئيسية">
            <a href="#">الرئيسية</a>
            <a href="#collections">الأقسام</a>
            <a href="#products">المنتجات</a>
            <a href="#offers">العروض</a>
            <a href="#contact">تواصل</a>
          </nav>

          <div className="top-actions">
            <button className="icon-button" aria-label="بحث">⌕</button>
            <button className="icon-button" aria-label="الحساب">👤</button>
            <button className="cart-button" aria-label="السلة">
              🛒 <span>{itemCount}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section-spacing">
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">مجموعة جديدة</span>
              <h1>أزياء عصرية تناسب يومكِ وملابسكِ.</h1>
              <p>
                اكتشفي أحدث صيحات الموضة والاحتياجات اليومية من الملابس، الحقائب،
                العطور، والمجوهرات بتصميم أنيق يناسب أسلوبكِ.
              </p>

              <div className="hero-actions">
                <a href="#products" className="primary-btn">تسوق الآن</a>
                <a href="#collections" className="secondary-btn">استكشف الأقسام</a>
              </div>

              <ul className="hero-stats" aria-label="إحصائيات المتجر">
                <li><strong>10K+</strong><span>عميل</span></li>
                <li><strong>4.9</strong><span>تقييم</span></li>
                <li><strong>200+</strong><span>منتج</span></li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="image-card large-card">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
                  alt="عارضة بالأزياء"
                />
              </div>
              <div className="floating-badge badge-top">خصم 30% </div>
              <div className="floating-badge badge-bottom">جديد هذا الشهر</div>
            </div>
          </div>
        </section>

        <section id="collections" className="collection-strip section-spacing">
          <div className="container">
            <div className="section-header">
              <p>الاقسام المفضلة</p>
              <h2>استكشف مجموعاتنا</h2>
            </div>

            <div className="categories-grid">
              {categories.map((category) => (
                <div key={category.name} className="category-card">
                  <span>{category.icon}</span>
                  <h3>{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="offers" className="promo-banner section-spacing">
          <div className="container promo-inner">
            <div>
              <p>خصم خاص</p>
              <h2>خصم 50% على أحدث المجموعات</h2>
            </div>
            <a href="#products" className="primary-btn">تسوق الآن</a>
          </div>
        </section>

        <section id="products" className="products-section section-spacing">
          <div className="container">
            <div className="section-header center">
              <p>منتجاتنا</p>
              <h2>أحدث المجموعات</h2>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.name} />
                    <span className="product-badge">{product.badge}</span>
                  </div>

                  <div className="product-body">
                    <div className="meta-row">
                      <span>{product.category}</span>
                      <span className="rating">★ 4.8</span>
                    </div>

                    <h3>{product.name}</h3>

                    <div className="price-row">
                      <strong>{product.price} د.ع</strong>
                      <del>{product.oldPrice} د.ع</del>
                    </div>

                    <div className="colors-row">
                      {product.colors.map((color) => (
                        <span key={color} className="color-pill">{color}</span>
                      ))}
                    </div>

                    <button onClick={() => addToCart(product)} className="add-btn">
                      إضافة إلى السلة
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-band section-spacing">
          <div className="container features-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-item">
                <div className="feature-icon">✓</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-grid section-spacing">
          <div className="container cta-inner">
            <div className="cta-card dark-card">
              <p>تجربة مميزة</p>
              <h2>تسوق بمعايير فاخرة</h2>
              <button className="primary-btn">تسوق الآن</button>
            </div>
            <div className="cta-card image-card minimal-card">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
                alt="عرض منتجات"
              />
            </div>
          </div>
        </section>
      </main>

      <aside className="cart-panel" aria-label="سلة المشتريات">
        <div className="cart-header">
          <h3>سلة المشتريات</h3>
          <span>{itemCount} عناصر</span>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>السلة فارغة حالياً</p>
          </div>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <span>{item.price} د.ع</span>
                </div>

                <div className="qty-control">
                  <button onClick={() => updateQty(item.id, -1)} aria-label="نقص الكمية">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, 1)} aria-label="زيادة الكمية">＋</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-summary">
          <div>
            <span>المجموع</span>
            <strong>{total} د.ع</strong>
          </div>
          <button className="primary-btn full-width">إكمال الطلب</button>
        </div>
      </aside>

      <footer id="contact" className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>أميرة باشا</h3>
            <p>أسلوب أنيق يلائم حياتك اليومية.</p>
          </div>
          <div>
            <h4>روابط سريعة</h4>
            <ul>
              <li>المنتجات</li>
              <li>العروض</li>
              <li>تواصل</li>
            </ul>
          </div>
          <div>
            <h4>تواصل معنا</h4>
            <ul>
              <li>info@amira-basha.com</li>
              <li>+964 771 234 567</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
