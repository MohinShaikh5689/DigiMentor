import { IconComponent } from "./icons";

const LandingPage = () => {
  const courses = [
    {
      id: 1,
      title: "Computer Basics Mastery",
      description: "Learn fundamental computer skills from scratch - perfect for beginners",
      price: "₹999",
      originalPrice: "₹1,999",
      duration: "4 weeks",
      lessons: 20,
      icon: "desktop",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Internet Safety & Security",
      description: "Master online security, avoid scams, and protect your data online",
      price: "₹799",
      originalPrice: "₹1,499",
      duration: "3 weeks", 
      lessons: 15,
      icon: "shield",
      level: "Beginner"
    },
    {
      id: 3,
      title: "Smartphone Mastery",
      description: "Navigate smartphones, apps, UPI payments & digital services",
      price: "₹599",
      originalPrice: "₹1,199",
      duration: "2 weeks",
      lessons: 12,
      icon: "smartphone",
      level: "Beginner"
    },
    {
      id: 4,
      title: "Digital Workplace Skills",
      description: "Excel in work-from-home and modern office environments",
      price: "₹1,299",
      originalPrice: "₹2,499",
      duration: "5 weeks",
      lessons: 25,
      icon: "briefcase",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Email & Communication",
      description: "Professional emails, video calls, and digital communication",
      price: "₹699",
      originalPrice: "₹1,299",
      duration: "3 weeks",
      lessons: 18,
      icon: "mail",
      level: "Beginner"
    },
    {
      id: 6,
      title: "Complete Digital Bundle",
      description: "All courses + bonus content + lifetime access + priority support",
      price: "₹3,999",
      originalPrice: "₹7,999",
      duration: "12 weeks",
      lessons: 90,
      icon: "award",
      popular: true,
      level: "All Levels",
      savings: "50% OFF"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      role: "Homemaker turned Entrepreneur",
      content: "At 45, I learned computers from scratch! Now I run my own online business. DigiMentor changed my life completely. The step-by-step approach made everything so simple.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9d3e085?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai", 
      role: "Small Business Owner",
      content: "UPI payments, online banking, digital marketing - learned everything! My business is now 70% online. The practical approach and real examples helped me understand quickly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Sunita Patel",
      location: "Pune",
      role: "School Teacher",
      content: "Online classes, digital teaching tools, student management - everything became easy. Now I'm the most tech-savvy teacher in my school! Very helpful for educators.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    }
  ];



  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="flag">🇮🇳</span>
              Made for Digital India
            </div>
            <h1>Transform Your Digital Skills with <span className="brand">DigiMentor</span></h1>
            <p className="hero-subtitle">
              Join thousands of Indians mastering technology. From computer basics to digital payments - 
              learn everything you need to thrive in Digital India.
            </p>
            <div className="hero-features">
              <div className="feature-tag">
                <IconComponent name="lightbulb" size={16} />
                Learn at Home
              </div>
              <div className="feature-tag">
                <span>₹</span>
                Affordable Pricing
              </div>
              <div className="feature-tag">
                <IconComponent name="users" size={16} />
                Expert Support
              </div>
              <div className="feature-tag">
                <IconComponent name="check" size={16} />
                Certified Courses
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>25,000+</strong>
                <span>Indian Students</span>
              </div>
              <div className="stat">
                <strong>99%</strong>
                <span>Success Rate</span>
              </div>
              <div className="stat">
                <strong>4.9/5</strong>
                <span>Student Rating</span>
              </div>
            </div>
            <div className="hero-cta">
              <button className="cta-primary">
                <span>Start Learning Today</span>
                <small>FREE trial included</small>
              </button>
              <button className="cta-secondary">
                <span>Watch Demo</span>
                <small>2 min overview</small>
              </button>
            </div>
            <div className="trust-badges">
              <span><IconComponent name="check" size={16} /> Skill India Recognized</span>
              <span><IconComponent name="shield" size={16} /> Secure Payment</span>
              <span>💳 UPI/Cards Accepted</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-elements">
                <div className="element element-1">
                  <IconComponent name="desktop" size={48} />
                </div>
                <div className="element element-2">
                  <IconComponent name="smartphone" size={48} />
                </div>
                <div className="element element-3">
                  <IconComponent name="shield" size={48} />
                </div>
                <div className="element element-4">
                  <IconComponent name="award" size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose DigiMentor?</h2>
          <p className="section-subtitle">India's Most Trusted Digital Learning Platform</p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <IconComponent name="target" size={48} />
              </div>
              <h3>Indian Context Learning</h3>
              <p>Courses designed specifically for Indian users with local examples and use cases</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <IconComponent name="users" size={48} />
              </div>
              <h3>Expert Indian Instructors</h3>
              <p>Learn from IIT, NIT graduates and certified professionals who understand your needs</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <span style={{fontSize: '48px'}}>₹</span>
              </div>
              <h3>Affordable Pricing</h3>
              <p>Quality education at just ₹25/day - less than your daily tea cost!</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <IconComponent name="award" size={48} />
              </div>
              <h3>Government Recognized</h3>
              <p>Certified by Skill India and aligned with Digital India initiatives</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <IconComponent name="smartphone" size={48} />
              </div>
              <h3>Mobile-First Learning</h3>
              <p>Learn on your smartphone - perfect for busy Indian lifestyles</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <IconComponent name="lightbulb" size={48} />
              </div>
              <h3>24/7 AI Support</h3>
              <p>Get instant help anytime with our intelligent DigiMentor assistant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <h2>Our Digital Literacy Courses</h2>
          <p className="section-subtitle">Choose the perfect course for your digital transformation journey</p>
          
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className={`course-card ${course.popular ? 'popular' : ''}`}>
                {course.popular && <div className="popular-badge">Most Popular</div>}
                {course.savings && <div className="savings-badge">{course.savings}</div>}
                <div className="course-image">
                  <IconComponent name={course.icon} size={64} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>{course.title}</h3>
                    <span className="level-badge">{course.level}</span>
                  </div>
                  <p>{course.description}</p>
                  <div className="course-features">
                    <span><IconComponent name="target" size={16} /> Practical Learning</span>
                    <span><IconComponent name="smartphone" size={16} /> Mobile Friendly</span>
                    <span><IconComponent name="award" size={16} /> Certificate</span>
                  </div>
                  <div className="course-meta">
                    <span>📅 {course.duration}</span>
                    <span>📚 {course.lessons} lessons</span>
                    <span>🎯 {course.level}</span>
                  </div>
                  <div className="course-price">
                    <span className="price">{course.price}</span>
                    <span className="original-price">{course.originalPrice}</span>
                    <span className="emi">or ₹{Math.floor(parseInt(course.price.slice(1))/3)}/month EMI</span>
                  </div>
                  <button className="course-btn">
                    Enroll Now
                    <span className="btn-subtext">30-day money back guarantee</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="payment-options">
            <h3>💳 Payment Options Available</h3>
            <div className="payment-methods">
              <span>📱 UPI (GPay, PhonePe, Paytm)</span>
              <span>💳 Credit/Debit Cards</span>
              <span>🏦 Net Banking</span>
              <span>💰 EMI Options</span>
              <span>🔒 100% Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="testimonials">
        <div className="container">
          <h2>⭐ Success Stories from Real Students</h2>
          <p className="section-subtitle">See how DigiMentor transformed thousands of Indian lives</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="testimonial-header">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="testimonial-avatar" 
                  />
                  <div className="testimonial-info">
                    <strong>{testimonial.name}</strong>
                    <div className="location">📍 {testimonial.location}</div>
                    <div className="role">{testimonial.role}</div>
                  </div>
                  <div className="rating">
                    {Array.from({length: testimonial.rating}, (_, i) => (
                      <IconComponent key={i} name="star" size={16} />
                    ))}
                  </div>
                </div>
                <div className="testimonial-content">
                  "{testimonial.content}"
                </div>
                <div className="verified">
                  <IconComponent name="check" size={16} />
                  Verified Student
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital India Section */}
      <section className="digital-india">
        <div className="container">
          <h2>🇮🇳 Be Part of Digital India's Success Story</h2>
          <div className="india-stats">
            <div className="india-stat">
              <div className="stat-icon">
                <IconComponent name="smartphone" size={48} />
              </div>
              <strong>80+ Crore</strong>
              <span>Internet Users</span>
            </div>
            <div className="india-stat">
              <div className="stat-icon">
                <span style={{fontSize: '48px'}}>₹</span>
              </div>
              <strong>₹15 Lakh Crore</strong>
              <span>Digital Economy by 2025</span>
            </div>
            <div className="india-stat">
              <div className="stat-icon">
                <IconComponent name="target" size={48} />
              </div>
              <strong>2025 Vision</strong>
              <span>Digitally Empowered India</span>
            </div>
          </div>
          <p>Don't get left behind. Join millions of Indians building their digital future. Start your journey today!</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>🚀 Ready to Start Your Digital Transformation?</h2>
          <p>Join 25,000+ Indians who are already building their digital skills with DigiMentor</p>
          <div className="cta-buttons">
            <button className="cta-primary large">
              🆓 Start FREE Trial
              <small>No payment required</small>
            </button>
            <button className="cta-secondary large">
              💬 Talk to DigiMentor AI
              <small>Get instant guidance</small>
            </button>
          </div>
          <div className="guarantee">
            <p>
              <IconComponent name="shield" size={20} /> 
              <strong>30-day money back guarantee</strong> | 
              📞 24/7 Support | 
              <IconComponent name="award" size={20} /> 
              Skill India Certified
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LandingPage