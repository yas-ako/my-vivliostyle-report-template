# タイトル

<!-- <h1>期末レポート</h1> -->

<div class="author">

<!--講義-->
<!-- - クラス：L  -->
<!--演習-->

- クラス：l
- 学籍番号：123ABC
- 氏名：苗字名前

</div>

## あいう

### 枠囲い

```html test.html
<div class="theorem">
<div class="theorem-heading"></div>

数列 $\{a_k\}$ について考える。

</div>
```

<div class="theorem">
<div class="theorem-heading"></div>

数列 $\{a_k\}$ について考える。

</div>

<div class="theorem">
<div class="theorem-heading"></div>

数列 $\{a_k\}$ について考える。

</div>

<div class="theorem">
<div class="theorem-heading"></div>

数列 $\{a_k\}$ について考える。

</div>

### 枠囲い続き

<div class="theorem">
<div class="theorem-heading"></div>

数列 $\{a_k\}$ について考える。

</div>

### 番号付き数式

<div class="equation">

$$\sum_{k=m}^{n} a_k = a_m + a_{m+1} + \cdots + a_n$$

</div>

### 表のサンプル

表と図の区別は、`<figure>`要素のどこに`<figcaption>`要素があるのか

- 一つ目の場合：表として扱われる
- 一番最後の場合：図として扱われる

<figure class="table">
<figcaption>銅線の抵抗値の温度変化</figcaption>

|   温度 $t$(℃)    | 19.0 | 24  | 28  | 30  | 19.0 | 24  | 28  | 30  |
| :--------------: | ---- | --- | --- | --- | ---- | --- | --- | --- |
| 抵抗 $R_{ab}$(Ω) | 7.3  | 7.4 | 7.5 | 7.6 | 7.3  | 7.4 | 7.5 | 7.6 |
|   抵抗 $R$(Ω)    | 7.2  | 7.3 | 7.4 | 7.5 | 7.2  | 7.3 | 7.4 | 7.5 |

</figure>

### 図のサンプル

次のような記法を使用します。

```
![銅線の抵抗値の温度変化](assets/1_銅線.png){.fig #fig-Cu width=500}
```

![銅線の抵抗値の温度変化](assets/1_銅線.png){.fig #fig-Cu width=500}

- `.fig`
  - 図のためのクラス
  - おそらく、`theme-academic`で定義されていたはず
- `#fig-Cu`
  - 図のid
  - 一意にする必要がある
  - 別の場所で`「[](#fig-Cu){.fig-ref}」`と書けば、「[](#fig-Cu){.fig-ref}」のように呼び出せる
    - `.fig-ref`は、このリポジトリで定義してある
    - 図に振ったidを、aタグを介して取得しているらしい
    - 図の番号は自動で挿入される

### 番号付き数式続き

<div class="equation">

$$
\sum_{k=1}^{5} k^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55
$$

</div>

## 段落２

<div class="theorem">
<div class="theorem-heading"></div>

数列 $\{a_k\}$ について考える。

</div>

<div class="equation">

$$
\sum_{k=1}^{5} k^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55
$$

</div>
