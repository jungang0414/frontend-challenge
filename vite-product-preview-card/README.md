# Frontend Mentor - Product preview card component

![Design preview for the Product preview card component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML and CSS.**

## The challenge

Your challenge is to build out this product preview card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.


### Design

設計稿 可以在src/design 查看

### Screenshot

![Desktop](https://github.com/jungang0414/frontend-challenge/blob/main/vite-product-preview-card/src/design/preview.PNG)
![Mobile](https://github.com/jungang0414/frontend-challenge/blob/main/vite-product-preview-card/src/design/preview-m.PNG)

### Built with 

- React + Vite
- Semantic HTML5 markup
- CSS custom properties
- SCSS
- CSS Grid
- flexbox

### Links

- Solution URL: [solution URL here](https://github.com/jungang0414/frontend-challenge/tree/main/vite-product-preview-card)
- Live Site URL: [live site URL here](https://vite-product-preview-card.netlify.app/)


### Learn

- SCSS

#### 宣告變數

使用$宣告變數，以往編寫CSS，例如如果每一個字型大小是16px要修改為18px時，必需在每一個類別中分別修改，但是當我們使用變數作為值並寫在CSS當中時，只需要修改宣告的變數值就可以了。

CSS
```
p {
    font-size: 16px;
}

class1 {
    font-size: 16px;
}

class 2 {
    font-size: 16px;
}
```

SCSS
```
$font-size-custom: 16px;

p {
    font-size: $font-size-custom;
}

class1 {
    font-size: $font-size-custom;
}

class 2 {
    font-size: $font-size-custom;
}

```

#### 模組化

透過@import，可以將SCSS以模組化的形式，從其他 SCSS 檔案引入需要的樣式。

```
/* 引入scss模組 */
/* ./_custom.scss */

透過@import是全部引入，所以要注意不要造成命名衝突。

```

#### 提前除錯

在SCSS當中時，會先預處理程式碼，提前找到錯誤的地方。

### 參考文件

- https://hackmd.io/@Heidi-Liu/sass-css-preprocessor
- https://guiblogs.com/sass-import/