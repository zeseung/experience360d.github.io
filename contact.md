---
layout: page
title: 연락처
description: 궁금한 점이 있으시면 언제든 연락주세요!
permalink: /contact/
---

## 연락처

안녕하세요! 궁금한 점이나 문의사항이 있으시면 언제든 연락주세요.

### 이메일
📧 [your-email@example.com](mailto:your-email@example.com)

### GitHub
🐙 [github.com/zeseung](https://github.com/zeseung)

### 메시지 보내기

아래 양식을 통해 메시지를 보내실 수 있습니다:

<form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">이름 *</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">이메일 *</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="subject">제목</label>
    <input type="text" id="subject" name="subject">
  </div>
  
  <div class="form-group">
    <label for="message">메시지 *</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  
  <button type="submit" class="btn">전송하기</button>
</form>

<style>
.contact-form {
  max-width: 600px;
  margin: 2rem 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff0a16;
}

.btn {
  background-color: #ff0a16;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e00914;
}
</style>
