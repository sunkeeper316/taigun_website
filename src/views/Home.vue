<template>

  <nav class="fixed top-0 w-full bg-white bg-opacity-95 shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <img src="/50.png" alt="Icon" class="h-8 w-8 ml-20" />
          <div class="text-2xl font-bold ml-3" style="color: #6B43BA;">Taigun</div>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center space-x-4">
            <a href="#features" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">功能</a>
            <a href="#forum" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">論壇</a>
            <a href="#community" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">社群</a>
            <a href="#download" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">下載</a>
            <a href="https://www.taigun.sbs/privacy" target="_blank" rel="noopener noreferrer" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">隱私權政策</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section id="hero" class="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">與志同道合的朋友連接</h1>
          <p class="text-xl mb-6">Taigun 是一款結合論壇與社交功能的 App，讓你分享興趣，認識新朋友。</p>
          <div class="flex flex-wrap gap-4">
            <a href="#download" class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition duration-300">立即下載</a>
            <a href="#features" class="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition duration-300">了解更多</a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center md:justify-end">
          <div class="relative w-64 h-[36rem]  bg-black rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full">

              </div>
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-600 rounded-full">

              </div>
              <div class="absolute inset-0">
                <img src="/taigun_demo.png" alt="App 截圖展示" class="w-full h-full object-fill">
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Taigun 的特色功能</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-md">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-gray-800">主題討論區</h3>
          <p class="text-gray-600">探索各種主題的討論區，從科技、旅遊到美食、藝術，總有一個適合你的話題。</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-gray-800">興趣配對</h3>
          <p class="text-gray-600">基於你的興趣和參與的討論，我們推薦志同道合的朋友，讓你輕鬆擴展社交圈。</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-gray-800">安全私密</h3>
          <p class="text-gray-600">我們重視你的隱私，提供端對端加密的私人訊息功能，讓你安心交流。</p>
        </div>
      </div>
    </div>
  </section>

  <section id="forum" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h2 class="text-3xl font-bold mb-6 text-gray-800">豐富多彩的論壇社區</h2>
          <p class="text-gray-600 mb-4">Taigun 的論壇涵蓋各種主題，從日常生活到專業領域，總有讓你感興趣的話題。</p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              創建屬於自己的討論主題
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              分享你的想法和經驗
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              參與熱門話題的討論
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              發現志同道合的朋友
            </li>
          </ul>
        </div>

        </div>
    </div>
  </section>

  <section id="community" class="py-16 bg-indigo-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">認識新朋友</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-md">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">興趣交友</h3>
          <p class="text-gray-600 mb-4">Taigun 不只是論壇，更是一個交友平台。通過共同的話題和興趣，找到志同道合的朋友。</p>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              基於興趣的智能配對
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              私人聊天功能
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              興趣小組活動
            </li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">安全互動</h3>
          <p class="text-gray-600 mb-4">我們重視用戶體驗與安全，提供多重保障措施確保你的社交體驗。</p>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              用戶驗證系統
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              舉報與封鎖功能
            </li>
            </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="privacy-purpose" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">我們如何使用您的 Google 資料</h2>
      <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        為了提升您的使用體驗，Taigun 會請求透過 Google 登入您的帳號資訊。我們僅使用以下資料：
      </p>
      <ul class="text-gray-700 max-w-2xl mx-auto space-y-3 text-base">
        <li>✅ 您的 Google 電子郵件地址（用於識別帳號）</li>
      </ul>
      <p class="text-lg text-gray-700 text-center mt-8 max-w-3xl mx-auto">
        我們絕不會儲存或分享您的 Google 密碼，所有授權流程皆依循 Google OAuth 標準進行，並符合 <a href="https://www.taigun.sbs/privacy" target="_blank" class="text-indigo-600 underline">隱私權政策</a>。
      </p>
    </div>
  </section>

  <section id="download" class="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-8">立即下載 Taigun</h2>
      <p class="text-xl text-center max-w-2xl mx-auto mb-10">開始你的社交之旅，認識志同道合的朋友，參與有趣的討論。</p>

      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <!-- <a href="https://play.google.com/store/apps/details?id=com.sun.taigun" target="_blank">
          <img src="/assets/img/icon/app_store.svg" alt="Get it on Google Play" class="h-60 mx-auto" >
        </a> -->

        <a href="https://play.google.com/store/apps/details?id=com.sun.taigun" target="_blank">
          <img src="/assets/img/icon/play_store.svg" alt="Get it on Google Play" class="h-60 mx-auto" >
        </a>
      </div>
    </div>
  </section>

  <footer class="bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-lg font-bold mb-4 text-indigo-500">關於 Taigun</h3>
        <p class="text-sm text-gray-400">
          Taigun 是一個結合論壇與社交功能的平台，讓用戶分享興趣、參與討論並認識新朋友。
        </p>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-4 text-indigo-500">快速連結</h3>
        <ul class="space-y-2">
          <li>
            <a href="#features" class="text-sm text-gray-400 hover:text-indigo-500 transition duration-300">功能</a>
          </li>
          <li>
            <a href="#forum" class="text-sm text-gray-400 hover:text-indigo-500 transition duration-300">論壇</a>
          </li>
          <li>
            <a href="#community" class="text-sm text-gray-400 hover:text-indigo-500 transition duration-300">社群</a>
          </li>
          <li>
            <a href="#download" class="text-sm text-gray-400 hover:text-indigo-500 transition duration-300">下載</a>
          </li>
          <li>
            <a href="https://www.taigun.sbs/privacy" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 hover:text-indigo-500 transition duration-300">隱私權政策</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-4 text-indigo-500">聯絡我們</h3>
        <ul class="space-y-2">
          <li class="text-sm text-gray-400">Email: taigun0316@gmail.com</li>
          <li class="text-sm text-gray-400">電話: +886 922 321 678</li>
        </ul>
      </div>

      </div>

    <div class="border-t border-gray-800 mt-8 pt-8 text-center">
      <p class="text-sm text-gray-400">
        &copy; {{ new Date().getFullYear() }} Taigun. All rights reserved.
      </p>
    </div>
  </div>
</footer>

</template>