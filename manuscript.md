# タイトル



<div class="author">


- クラス：l
- 学籍番号：123ABC
- 氏名：苗字名前

</div>

## いろいろと試す

### シンタックスハイライト

ちゃんとできる。カスタマイズも楽。

```html title=testあああ.html
<div class="theorem">
  <div class="theorem-heading"></div>

数列 $\{a_k\}$ について考える。

</div>
```

インラインのコードは `こんな感じ、aiueo`になる

  ### 囲み枠

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

ちゃんと番号がインクリメントされている。

### 囲み枠続き

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
  - 別の場所から図のidを用いて参照できる
    - 例
      - `「[](#fig-Cu){.fig-ref}」のように使用する`
      - 「[](#fig-Cu){.fig-ref}」のように使用する
    - `.fig-ref`は、このリポジトリで定義したCSSクラス
    - 図に振ったidを、aタグを介して取得しているらしい
    - 図の番号は自動で挿入される

### 番号付き数式続き

<div class="equation">

$$
\sum_{k=1}^{5} k^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55
$$

</div>

## 段落２

章をまたぐと、数式や「例」の番号がリセットされる。

<div class="theorem">
<div class="theorem-heading"></div>

数列 $\{a_k\}$ について考える。

</div>

<div class="equation">

$$
\sum_{k=1}^{5} k^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55
$$

</div>
