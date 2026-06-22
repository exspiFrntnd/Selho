// ============================================================
// 1. ДАННЫЕ И ИНИЦИАЛИЗАЦИЯ localStorage
// ============================================================

// Базовый массив товаров (из SQL-дампа)
const DEFAULT_PRODUCTS = [
  {
    id: 13,
    name: "Сыр Кочотта классический, 1 кг",
    price: 1500,
    quantity: 1,
    image: "img/sir_kachotta.jpg",
    classification: "Сыры",
  },
  {
    id: 14,
    name: "Сыр Кочотта с пажитником, 1 кг",
    price: 1500,
    quantity: 1,
    image: "img/Katochota_paz.jpg",
    classification: "Сыры",
  },
  {
    id: 15,
    name: "Сыр Кочотта с оливками, 1 кг",
    price: 1500,
    quantity: 1,
    image: "img/Katochota_olive.jpg",
    classification: "Сыры",
  },
  {
    id: 16,
    name: "Сыр Адыгейский, 1 кг",
    price: 1300,
    quantity: 1,
    image: "img/adgey.jpg",
    classification: "Сыры",
  },
  {
    id: 17,
    name: "Сыр Халлуми, 1 кг",
    price: 1300,
    quantity: 1,
    image: "img/halymi.jpg",
    classification: "Сыры",
  },
  {
    id: 18,
    name: "Сыр Белпер кнолл, 1 шт.",
    price: 120,
    quantity: 1,
    image: "img/Belper_knol.jpg",
    classification: "Сыры",
  },
  {
    id: 19,
    name: "Сыр Белпер кнолле, 1 шт.",
    price: 200,
    quantity: 1,
    image: "img/bel_knol_200.jpg",
    classification: "Сыры",
  },
  {
    id: 20,
    name: "Сыр Сулугуни, 1 кг",
    price: 1300,
    quantity: 1,
    image: "img/suluguni.jpg",
    classification: "Сыры",
  },
  {
    id: 21,
    name: "Сыр Ламбер, 1 кг",
    price: 1500,
    quantity: 1,
    image: "img/Lamber.jpg",
    classification: "Сыры",
  },
  {
    id: 22,
    name: "Сыр Канестрато, 1 кг",
    price: 1500,
    quantity: 1,
    image: "img/sir-kanestrato.jpg",
    classification: "Сыры",
  },
  {
    id: 23,
    name: "Сыр Мраморный, 1 кг",
    price: 1500,
    quantity: 1,
    image: "img/mramornyj.jpg",
    classification: "Сыры",
  },
  {
    id: 24,
    name: "Сыр Драй Джек, 1 кг",
    price: 1500,
    quantity: 1,
    image: "img/dzek.jpg",
    classification: "Сыры",
  },
  {
    id: 25,
    name: "Молоко козье, 0.5 л",
    price: 130,
    quantity: 1,
    image: "img/Moloko.jpg",
    classification: "Молочная продукция",
  },
  {
    id: 26,
    name: "Творог, 1 кг",
    price: 800,
    quantity: 1,
    image: "img/tvorog.jpg",
    classification: "Молочная продукция",
  },
  {
    id: 27,
    name: "Творог обезжиренный, 1 кг",
    price: 500,
    quantity: 1,
    image: "img/Tvorog_obz.jpg",
    classification: "Молочная продукция",
  },
  {
    id: 28,
    name: "Детская творожная масса, 100 г",
    price: 800,
    quantity: 0,
    image: "img/Tvoroz_mas.jpg",
    classification: "Молочная продукция",
  },
  {
    id: 29,
    name: "Йогурт, 0.5 л",
    price: 150,
    quantity: 1,
    image: "img/yogurt.jpg",
    classification: "Молочная продукция",
  },
  {
    id: 30,
    name: "Кефир, 0.5 л",
    price: 150,
    quantity: 1,
    image: "img/Kefir.jpg",
    classification: "Молочная продукция",
  },
  {
    id: 31,
    name: "Масло сливочное, 1 кг",
    price: 3500,
    quantity: 1,
    image: "img/maslo.jpg",
    classification: "Молочная продукция",
  },
  {
    id: 32,
    name: "Яйцо перепелиное, 1 шт.",
    price: 5,
    quantity: 1,
    image: "img/perepel_egg.jpg",
    classification: "Яйца",
  },
  {
    id: 33,
    name: "Яйцо куриное, 10 шт.",
    price: 120,
    quantity: 10,
    image: "img/Chick_egg.jpg",
    classification: "Яйца",
  },
  {
    id: 34,
    name: "Петушки молодые, 1 кг",
    price: 380,
    quantity: 1,
    image: "img/Petyh.jpg",
    classification: "Мясо",
  },
  {
    id: 35,
    name: "Индейка домашняя, 1 кг",
    price: 600,
    quantity: 1,
    image: "img/Chiken.jpg",
    classification: "Мясо",
  },
  {
    id: 36,
    name: "Перепелка, 1 кг",
    price: 850,
    quantity: 1,
    image: "img/Perepel.jpg",
    classification: "Мясо",
  },
  {
    id: 37,
    name: "Козлятина, 1 кг",
    price: 500,
    quantity: 1,
    image: "img/Kozl.jpg",
    classification: "Мясо",
  },
  {
    id: 38,
    name: "Кролик, 1 кг",
    price: 550,
    quantity: 1,
    image: "img/Krol.jpg",
    classification: "Мясо",
  },
];

// Инициализация хранилищ
function initStorage() {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(DEFAULT_PRODUCTS));
  }
  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify([]));
  }
  if (!localStorage.getItem("users")) {
    const defaultUsers = [
      {
        email: "admin@example.com",
        password: "admin",
        full_name: "Администратор",
        isAdmin: true,
      },
      {
        email: "user@example.com",
        password: "user",
        full_name: "Иван Иванов",
        isAdmin: false,
      },
    ];
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
}

// Получение данных
function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function getOrders() {
  return JSON.parse(localStorage.getItem("orders")) || [];
}

function saveOrders(orders) {
  localStorage.setItem("orders", JSON.stringify(orders));
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ============================================================
// 2. СЕССИЯ (вход/выход/проверка)
// ============================================================

function getSession() {
  return JSON.parse(localStorage.getItem("session")) || null;
}

function saveSession(session) {
  if (session) {
    localStorage.setItem("session", JSON.stringify(session));
  } else {
    localStorage.removeItem("session");
  }
}

function isLoggedIn() {
  return getSession() !== null;
}

function isAdmin() {
  const session = getSession();
  return session && session.isAdmin === true;
}

function getUser() {
  const session = getSession();
  if (!session) return null;
  const users = getUsers();
  return users.find((u) => u.email === session.email) || null;
}

function login(email, password) {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return false;
  saveSession({
    email: user.email,
    full_name: user.full_name,
    isAdmin: user.isAdmin || false,
  });
  return true;
}

function logout() {
  saveSession(null);
}

// ============================================================
// 3. РАБОТА С КОРЗИНОЙ (localStorage)
// ============================================================

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId, quantity) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }
  saveCart(cart);
  updateCartBadge();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartBadge();
}

function clearCart() {
  localStorage.removeItem("cart");
  updateCartBadge();
}

function getCartTotal() {
  const cart = getCart();
  const products = getProducts();
  return cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

// ============================================================
// 4. ЗАКАЗЫ
// ============================================================

function placeOrder(comment) {
  const cart = getCart();
  if (cart.length === 0) return false;

  const products = getProducts();
  const total = getCartTotal();
  const order = {
    id: Date.now(),
    items: cart.map((item) => {
      const product = products.find((p) => p.id === item.id);
      return {
        name: product.name,
        quantity: item.quantity,
        price: product.price,
      };
    }),
    total: total,
    status: "В процессе",
    date: new Date().toLocaleString(),
    comment: comment || "",
  };

  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
  clearCart();
  return true;
}

function updateOrderStatus(orderId, newStatus) {
  const orders = getOrders();
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveOrders(orders);
    return true;
  }
  return false;
}

// ============================================================
// 5. УПРАВЛЕНИЕ ТОВАРАМИ (админ)
// ============================================================

function addProduct(name, quantity, price, image, classification) {
  const products = getProducts();
  const newId = Math.max(...products.map((p) => p.id), 0) + 1;
  const newProduct = {
    id: newId,
    name: name,
    price: parseFloat(price),
    quantity: parseInt(quantity),
    image: image || "",
    classification: classification || "Сыры",
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
}

function deleteProduct(productId) {
  let products = getProducts();
  products = products.filter((p) => p.id !== productId);
  saveProducts(products);
  // Также удаляем из корзины
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
  updateCartBadge();
}

function updatePrice(productId, newPrice) {
  const products = getProducts();
  const product = products.find((p) => p.id === productId);
  if (product) {
    product.price = parseFloat(newPrice);
    saveProducts(products);
    return true;
  }
  return false;
}

// ============================================================
// 6. РЕНДЕРИНГ МЕНЮ (динамическое)
// ============================================================

function renderMenu() {
  const container = document.getElementById("menu-container");
  if (!container) return;

  const loggedIn = isLoggedIn();
  const admin = isAdmin();
  const user = getUser();

  let html = `
    <nav class="nav">
      <ul>
        <li><a href="index.html">ГЛАВНАЯ</a></li>
        <li><a href="catalog.html">ПРОДУКТЫ</a></li>
        <li><a href="about.html">О НАС</a></li>
  `;

  if (loggedIn) {
    html += `<li><a href="personal_cabinet.html">ЛИЧНЫЙ КАБИНЕТ</a></li>`;
    if (admin) {
      html += `<li><a href="admin.html" class="admin-link">Панель управления</a></li>`;
    }
  } else {
    html += `<li><a href="auth.html">ВОЙТИ</a></li>`;
  }

  html += `
      </ul>
    </nav>
  `;
  container.innerHTML = html;
}

// ============================================================
// 7. ОБНОВЛЕНИЕ БЕЙДЖА КОРЗИНЫ
// ============================================================

function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-badge");
  if (badge) badge.textContent = count || "";
}

// ============================================================
// 8. РЕНДЕРИНГ ГЛАВНОЙ (первые 6 товаров)
// ============================================================

function renderHomeProducts() {
  const container = document.getElementById("home-product-grid");
  if (!container) return;
  const products = getProducts();
  const homeProducts = products.slice(0, 6);
  container.innerHTML = homeProducts
    .map(
      (p) => `
    <div class="product-card">
      <div class="product-card-image">
        <img src="${p.image}" alt="${p.name}" class="product-thumb">
      </div>
      <div class="product-card-info">
        <div class="product-card-title"><strong>${p.name}</strong></div>
        <div class="product-card-specs">
          <span>${p.classification}</span><br>
          <span class="small-text">Количество: ${p.quantity}</span>
        </div>
        <div class="product-card-price"><strong>${p.price.toLocaleString("ru-RU")} руб.</strong></div>
        <span id="cart-status-${p.id}" class="cart-status small-text" style="display:block; margin-top:5px;"></span>
        <form onsubmit="addToCartHandler(event, ${p.id});" style="margin-top:10px;">
          <input type="number" name="quantity" min="1" value="1" required>
          <button type="submit" class="buy-ticket-btn" style="margin-top:5px;">Добавить в корзину</button>
        </form>
      </div>
    </div>
  `,
    )
    .join("");
}

// ============================================================
// 9. РЕНДЕРИНГ КАТАЛОГА (с фильтрацией)
// ============================================================

function renderCatalog() {
  const container = document.getElementById("catalog-list");
  if (!container) return;

  const filterCategory =
    document.getElementById("classification_id")?.value || "";
  const searchText =
    document.getElementById("search")?.value?.toLowerCase() || "";

  const products = getProducts();
  let filtered = products.filter((p) => {
    const matchCategory =
      !filterCategory || p.classification === filterCategory;
    const matchSearch = p.name.toLowerCase().includes(searchText);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p>Товаров по вашему запросу не найдено.</p>";
    return;
  }

  container.innerHTML = filtered
    .map(
      (p) => `
    <div class="product-item">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="product-details-text">
        <h3>${p.name}</h3>
        <p class="small-text">Категория: ${p.classification}</p>
        <p class="small-text">В наличии: ${p.quantity}</p>
      </div>
      <div class="product-action-block">
        <div class="price-info">${p.price.toLocaleString("ru-RU")} руб.</div>
        <form onsubmit="addToCartHandler(event, ${p.id});" style="margin-top:10px;">
          <input type="number" name="quantity" min="1" value="1" required style="width:100px;">
          <button type="submit" class="buy-ticket-btn" style="margin-top:5px;">Добавить в корзину</button>
          <span id="cart-status-${p.id}" class="cart-status small-text" style="display:block; margin-top:5px;"></span>
        </form>
      </div>
    </div>
  `,
    )
    .join("");
}

// ============================================================
// 10. ОБРАБОТЧИК ДОБАВЛЕНИЯ В КОРЗИНУ
// ============================================================

function addToCartHandler(e, productId) {
  e.preventDefault();
  const form = e.target;
  const quantityInput = form.querySelector('input[name="quantity"]');
  const quantity = parseInt(quantityInput.value) || 1;

  addToCart(productId, quantity);

  const statusSpan = document.getElementById(`cart-status-${productId}`);
  if (statusSpan) {
    statusSpan.textContent = "Товар добавлен в корзину";
    statusSpan.style.color = "#28a745";
    setTimeout(() => {
      statusSpan.textContent = "";
    }, 3000);
  }
}

// ============================================================
// 11. РАСКРЫТИЕ ТЕКСТА (О нас)
// ============================================================

function initExpandText() {
  document.querySelectorAll(".expand-wrapper").forEach((wrapper) => {
    const el = wrapper.querySelector(".expand-text");
    const link = wrapper.querySelector(".expand-link");
    const content = el?.querySelector(".text-content");
    if (!el || !link || !content) return;

    const short = el.dataset.short;
    const full = el.dataset.full;
    content.textContent = short;

    link.addEventListener("click", () => {
      if (el.classList.contains("open")) {
        el.classList.remove("open");
        content.textContent = short;
        link.textContent = "▼ Читать дальше";
      } else {
        el.classList.add("open");
        content.textContent = full;
        link.textContent = "▲ Свернуть";
      }
    });
  });
}

// ============================================================
// 12. ЛИЧНЫЙ КАБИНЕТ
// ============================================================

function renderCabinet() {
  // Проверка авторизации
  if (!isLoggedIn()) {
    window.location.href = "auth.html";
    return;
  }

  const user = getUser();
  if (user) {
    document.getElementById("cabinet-name").textContent = user.full_name;
    document.getElementById("cabinet-email").textContent = user.email;
    document.getElementById("cabinet-phone").textContent = user.phone || "—";
    document.getElementById("cabinet-age").textContent = user.age || "—";
    document.getElementById("cabinet-regdate").textContent =
      user.registered || "01.01.2025";
  }

  // Показываем/скрываем админ-блок
  const adminBlock = document.getElementById("admin-block");
  if (adminBlock) {
    adminBlock.style.display = isAdmin() ? "block" : "none";
  }

  // Корзина
  const cartContainer = document.getElementById("cart-items");
  if (cartContainer) {
    const cart = getCart();
    const products = getProducts();
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p class="small-text">Корзина пуста</p>';
    } else {
      let html = `<table style="width:100%; border-collapse:collapse; margin-bottom:10px;">
        <tr style="background:#f8f9fa; font-weight:600;">
          <th style="text-align:left; padding:8px;">Товар</th>
          <th style="text-align:left; padding:8px;">Кол‑во</th>
          <th>Цена</th>
          <th>Сумма</th>
          <th>Действие</th>
        </tr>`;
      let total = 0;
      cart.forEach((item, idx) => {
        const product = products.find((p) => p.id === item.id);
        if (!product) return;
        const sum = product.price * item.quantity;
        total += sum;
        html += `<tr>
          <td>${product.name}</td>
          <td>${item.quantity}</td>
          <td>${product.price.toLocaleString("ru-RU")} руб.</td>
          <td>${sum.toLocaleString("ru-RU")} руб.</td>
          <td><button onclick="removeFromCart(${idx}); renderCabinet();" class="btn-primary" style="font-size:12px; padding:4px 8px;">Удалить</button></td>
        </tr>`;
      });
      html += `<tr><td colspan="3" style="text-align:right; font-weight:600;">Итого:</td><td><strong>${total.toLocaleString("ru-RU")} руб.</strong></td><td></td></tr></table>`;
      cartContainer.innerHTML = html;
    }
  }

  // Заказы
  const ordersContainer = document.getElementById("orders-list");
  if (ordersContainer) {
    const orders = getOrders();
    // Показываем заказы только текущего пользователя (по email)
    const userOrders = orders.filter((o) => o.userEmail === user.email);
    if (userOrders.length === 0) {
      ordersContainer.innerHTML =
        '<p class="small-text">У вас пока нет заказов.</p>';
    } else {
      ordersContainer.innerHTML = userOrders
        .map(
          (o) => `
        <div style="border:1px solid #dee2e6; border-radius:8px; padding:10px; margin-bottom:10px;">
          <div>
            <strong>Заказ #${o.id}</strong>
            <span style="color: ${o.status === "Выполнен" ? "green" : "orange"};">
              Статус: ${o.status}
            </span>
          </div>
          <div class="small-text">
            Дата: ${o.date}<br>
            Итого: ${o.total.toLocaleString("ru-RU")} руб.
          </div>
          <div style="margin-top:8px;">
            ${o.items.map((item) => `${item.name} — ${item.quantity} × ${item.price.toLocaleString("ru-RU")} руб.`).join("<br>")}
          </div>
          <div><p>По готовности заказа мы свяжемся с вами!</p></div>
        </div>
      `,
        )
        .join("");
    }
  }
}

// ============================================================
// 13. ОФОРМЛЕНИЕ ЗАКАЗА
// ============================================================

function handleOrderForm(e) {
  e.preventDefault();
  const comment = document.getElementById("order-comment")?.value || "";
  const user = getUser();
  if (!user) {
    alert("Вы не авторизованы!");
    return;
  }
  const success = placeOrder(comment);
  if (success) {
    // Привязываем заказ к пользователю
    const orders = getOrders();
    if (orders.length > 0) {
      orders[0].userEmail = user.email;
      saveOrders(orders);
    }
    alert("Заказ оформлен! Мы свяжемся с вами.");
    renderCabinet();
    updateCartBadge();
  } else {
    alert("Корзина пуста!");
  }
}

// ============================================================
// 14. АДМИНКА
// ============================================================

function renderAdmin() {
  if (!isAdmin()) {
    window.location.href = "auth.html";
    return;
  }

  // Товары
  const prodContainer = document.getElementById("admin-products");
  if (prodContainer) {
    const products = getProducts();
    let html = `<table class="products-table"><thead><tr><th>Название</th><th>Количество</th><th>Цена</th><th>Категория</th><th>Действия</th></tr></thead><tbody>`;
    products.forEach((p) => {
      html += `<tr>
        <td>${p.name}</td>
        <td>${p.quantity}</td>
        <td>${p.price.toLocaleString("ru-RU")} руб.</td>
        <td>${p.classification}</td>
        <td>
          <button onclick="deleteProduct(${p.id}); renderAdmin();" class="btn-primary" style="font-size:12px; padding:4px 8px;">Удалить</button>
          <form onsubmit="updatePriceHandler(event, ${p.id});" style="display:inline;">
            <input type="number" step="0.01" name="newPrice" value="${p.price}" style="width:80px;">
            <button type="submit" class="btn-primary" style="font-size:12px; padding:4px 8px;">Изменить цену</button>
          </form>
        </td>
      </tr>`;
    });
    html += `</tbody></table>`;
    prodContainer.innerHTML = html;
  }

  // Заказы
  const orderContainer = document.getElementById("admin-orders");
  if (orderContainer) {
    const orders = getOrders();
    if (orders.length === 0) {
      orderContainer.innerHTML = '<p class="small-text">Заказов пока нет.</p>';
    } else {
      let html = `<table class="orders-table"><thead><tr><th>Заказ #</th><th>Пользователь</th><th>Итого</th><th>Статус</th><th>Позиции</th><th>Действия</th></tr></thead><tbody>`;
      orders.forEach((o) => {
        html += `<tr>
          <td>${o.id}</td>
          <td>${o.userEmail || "Гость"}</td>
          <td>${o.total.toLocaleString("ru-RU")} руб.</td>
          <td>${o.status}</td>
          <td>${o.items.map((item) => `${item.name} — ${item.quantity} × ${item.price.toLocaleString("ru-RU")} руб.`).join("<br>")}</td>
          <td>
            <select id="status-select-${o.id}">
              <option value="В процессе" ${o.status === "В процессе" ? "selected" : ""}>В процессе</option>
              <option value="Выполнен" ${o.status === "Выполнен" ? "selected" : ""}>Выполнен</option>
            </select>
            <button onclick="updateOrderStatusHandler(${o.id});" class="btn-primary" style="font-size:12px; padding:4px 8px;">Обновить</button>
          </td>
        </tr>`;
      });
      html += `</tbody></table>`;
      orderContainer.innerHTML = html;
    }
  }
}

// ============================================================
// 15. ОБРАБОТЧИКИ ДЛЯ АДМИНКИ
// ============================================================

function updatePriceHandler(e, productId) {
  e.preventDefault();
  const form = e.target;
  const newPrice = form.querySelector('input[name="newPrice"]').value;
  if (updatePrice(productId, newPrice)) {
    alert("Цена обновлена!");
    renderAdmin();
  } else {
    alert("Ошибка обновления цены.");
  }
}

function updateOrderStatusHandler(orderId) {
  const select = document.getElementById(`status-select-${orderId}`);
  if (!select) return;
  const newStatus = select.value;
  if (updateOrderStatus(orderId, newStatus)) {
    alert("Статус заказа обновлён!");
    renderAdmin();
  } else {
    alert("Ошибка обновления статуса.");
  }
}

// ============================================================
// 16. ФОРМЫ ВХОДА/РЕГИСТРАЦИИ
// ============================================================

function handleLoginForm(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  if (login(email, password)) {
    alert("Вход выполнен успешно!");
    window.location.href = "personal_cabinet.html";
  } else {
    alert("Неверный email или пароль!");
  }
}

function handleRegisterForm(e) {
  e.preventDefault();
  const full_name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const age = document.getElementById("reg-age").value;
  const phone = document.getElementById("reg-phone").value;
  const password = document.getElementById("reg-password").value;
  const password2 = document.getElementById("reg-password2").value;

  if (password !== password2) {
    alert("Пароли не совпадают!");
    return;
  }

  const users = getUsers();
  if (users.find((u) => u.email === email)) {
    alert("Пользователь с таким email уже существует!");
    return;
  }

  const newUser = {
    email,
    password,
    full_name,
    age: parseInt(age),
    phone,
    isAdmin: false,
    registered: new Date().toLocaleDateString("ru-RU"),
  };
  users.push(newUser);
  saveUsers(users);
  alert("Регистрация успешна! Теперь войдите.");
  window.location.href = "auth.html";
}

// ============================================================
// 17. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  initStorage();
  renderMenu();
  updateCartBadge();

  // Определяем текущую страницу и вызываем соответствующие рендеры
  const path = window.location.pathname;
  if (path.includes("index.html") || path.endsWith("/")) {
    renderHomeProducts();
  } else if (path.includes("catalog.html")) {
    renderCatalog();
    document
      .getElementById("classification_id")
      ?.addEventListener("change", renderCatalog);
    document.getElementById("search")?.addEventListener("input", renderCatalog);
  } else if (path.includes("about.html")) {
    initExpandText();
  } else if (path.includes("personal_cabinet.html")) {
    renderCabinet();
    document
      .getElementById("order-form")
      ?.addEventListener("submit", handleOrderForm);
    document
      .getElementById("logout-btn")
      ?.addEventListener("click", function (e) {
        e.preventDefault();
        logout();
        alert("Вы вышли из аккаунта.");
        window.location.href = "index.html";
      });
  } else if (path.includes("admin.html")) {
    renderAdmin();
  } else if (path.includes("auth.html")) {
    document
      .getElementById("login-form")
      ?.addEventListener("submit", handleLoginForm);
  } else if (path.includes("registration.html")) {
    document
      .getElementById("register-form")
      ?.addEventListener("submit", handleRegisterForm);
  }
});
