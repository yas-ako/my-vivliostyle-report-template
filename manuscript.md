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

`$$~$$`ではさまれた部分に $\mathrm{\LaTeX}$ で使用される数式を書くことができる。自動で数式番号が付与される。`h2`レベルの見出しごとに、カウンタがリセットされる。
数式番号の参照はまだ実現できていない。
こちら^[https://gihyo.jp/article/2025/02/vivliostyle-05-2#ghd7AWAtwX] にある方法を用いると、数式の前後にタグを入れなければならず、面倒である。

```tex title=texのサンプル
$$\sum_{k=m}^{n} a_k = a_m + a_{m+1} + \cdots + a_n$$
$$(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k$$
$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}| |\mathbf{b}| \cos\theta$$
$C$を積分定数として
$$\int x^n dx = \frac{1}{n+1} x^{n+1} + C \quad (n \neq -1)$$
```

$$\sum_{k=m}^{n} a_k = a_m + a_{m+1} + \cdots + a_n$$
$$(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k$$
$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}| |\mathbf{b}| \cos\theta$$
$C$を積分定数として
$$\int x^n dx = \frac{1}{n+1} x^{n+1} + C \quad (n \neq -1)$$

### 表のサンプル

`<figure>`要素のどこに`<figcaption>`要素があるのかを用いて、表と図を区別する。
こちら^[https://gihyo.jp/article/2025/02/vivliostyle-05-2#gh2Xq8vaNb] と こちら^[https://gihyo.jp/article/2025/02/vivliostyle-05#ghfbEpozht] を参照すること。

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

### 番号付き数式の続き

h3の見出しが変わっても、数式番号はそのままになっている。

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

$$
e^{i\pi} + 1 = 0
$$

### 番号無し数式

`<div class="no-eqation-counter"></div>` で囲うことで、その中にある数式には数式番号を表示させないようにできる。このとき、数式番号は増加しない。

<div class="no-eqation-counter">

$$
\frac{\pi}{4} = \sum_{n=0}^\infty \frac{(-1)^n}{2n+1}
$$

</div>

次の数式は、`<div class="no-eqation-counter"></div>` で囲んでいないので、番号が表示される。

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## 段落２

章をまたぐと、数式や「例」の番号がリセットされる。

<div class="theorem">
<div class="theorem-heading"></div>

マクスウェル方程式のうち、ファラデーの誘導法則（微分形）について考えてみよう。

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
$$

もちろん、枠の中に数式を入れることだってできる。

</div>
