// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験・調査について",
          "content": "本実験・調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "1.本実験・調査の目的",
          "content": "人間や動物の赤ちゃんに対する感情と愛着スタイル、日本特有の「かわいい」という文化の関係性について調べることが本実験・調査の目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2.本実験・調査の手続き",
          "content": "もしあなたが本実験・調査に参加した場合、あなたには様々な画像に対する感想を選択方式でお答えいただきます。この本実験・調査の所要時間は約7分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3.潜在的なリスク・苦痛など",
          "content": "実験による多少の疲労は除き、潜在的なリスクや苦痛はありません。また、いつ、いかなる理由でも、自由に実験を中止していただけます(6.参加と中止もご参照ください)。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4.参加による利益",
          "content": "あなたが本実験・調査に参加することで学習、認知、感情についての研究の発展に繋がります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5.匿名性の確保",
          "content": "本実験・調査によって得られた情報は法律による開示請求を除き、匿名性が維持されます。匿名性は実験参加者番号の付与、統計的解析によって保たれます。収集されたデータは個人が特定できるデータが公表されることは決してありません。また、頂いたデータは集団の傾向として統計的に処理したうえで分析し、データはプロジェクト演習の調査終了後に安全な形で消去します。"
        },
        {
          "required": true,
          "type": "text",
          "title": "6.参加と中止",
          "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。また、参加した場合でも、いつでも、どのような理由でも、途中で実験・調査を中止することができます。もし、途中で実験・調査を中止したくなった場合は、「ESCキー」を押した後、ウィンドウを閉じることで実験・調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "7.実験・調査実施者へのお問い合わせ",
          "content": "本実験・調査に対して質問がある場合は、実施責任者、本田千夏（g227125@ex.osaka-kyoiku.ac.jp）にお問い合わせください。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は、ESCを押した後、ウィンドウを閉じてください。",
          "options": [
            {
              "label": "PCからGoogle Chromeを用いて実験・調査参加をお願いします。"
            },
            {
              "label": "実験・調査開始後はブラウザの「戻る」ボタンは使用しないでください。"
            },
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "consent"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Informed_consent"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fullscreen",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "本実験はフルスクリーンモードで行われます。",
          "hint": "ここをクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "これから調査が始まります。",
              "content": "写真が提示されるので、それぞれの質問に回答してください。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Start"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Baby_Schema",
          "shuffle": true,
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": ""
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"baby1.jpg\"] }",
                  "width": "",
                  "height": "",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "baby1"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby1.jpg": "embedded\u002F7f8942e40dc09ee8b888e9429d8a7126a5eb1ff920d143a7831abe487c8ea04b.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "baby1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"baby2.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "baby2"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby2.jpg": "embedded\u002F9d818d9a53da70b609ce162684f161d743bf84461cc06205415724ba0a81ea06.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "baby2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"baby3.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "baby3"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby3.jpg": "embedded\u002F570474a32a5fd045d4f611dab6566fb0139e9ac86d089effccb71f2c9e034cde.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "baby3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"m-adult1.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "adult1_m"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "m-adult1.jpg": "embedded\u002F678fe4c0f57350a0b2f2866623d4e59ee9ee2ca4aad5f1e1958a5576f7bd11b7.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "adult1_m"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"m-adult2.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "adult2_m"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "m-adult2.jpg": "embedded\u002F480dc6f83313c6ce64f6746f5fde6204b9d7d78534b5ea02cc60bf4c38f63213.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "adult2_m"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"f-adult1.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "adult3_f"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "f-adult1.jpg": "embedded\u002Fc05e7ac9b3a2a52dd7d66030cfbf20f422214251c82fa10d8058da44517209cd.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "adult3_f"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"f-adult2.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いました",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてくださいい",
                  "name": "adult4_f"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "f-adult2.jpg": "embedded\u002F38e60c68ebb52a529cad35b0cdeb352a0dea47417eaa15f64b88d5fdc408ed68.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "adult4_f"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"baby-rabbit.png\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思ましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_baby_rubbit"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby-rabbit.png": "embedded\u002F2cab8bad6ebc413d24d2d215e87add6eca1d8053527cce1bd0baf1ebfa3cc417.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_baby_rabbit"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"baby-elephant.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_baby_elephant"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby-elephant.jpg": "embedded\u002Fbc9c0e5b5730f23b2f9b72ed363c988d4da16436503ea5d01cacc497a2857568.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_baby_elephant"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"baby-horse.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_baby_horse"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby-horse.jpg": "embedded\u002Fc86a611e43a9ef866678c1197a428ed3dc9abcfaee2849778409df864242c109.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_baby_horse"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"adult-dog.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_adult_dog"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "adult-dog.jpg": "embedded\u002Ff6d5a121e2cc0e26883320a992c66eef9bfa03af7d90b70956ed5fd818987922.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_adult_dog"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"adult-horse.png\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "とてもそう思う",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て次の質問に答えてください",
                  "name": "animal_adult_horse"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "adult-horse.png": "embedded\u002F16694be9f5423f6b53134638c01c78b57382a9375d76de73d166b8d445e90d2b.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_adult_horse"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"adult-lion.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_adult_lion"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "adult-lion.jpg": "embedded\u002Fddec2f368c8ea6c39a5ee9cb7a68ae47ce42605be9c597937383d2cb5497327b.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_adult_lion"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"babyscema.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "schema_illustration"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "babyscema.jpg": "embedded\u002Fbbe0f969237183a0b10705b3493106f85b2dce1d0dc74eff27339b9ca7a930a3.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "schema_illustration"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"n-babyscema.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "nt_schema_illustration"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "n-babyscema.jpg": "embedded\u002Ffc2440e35c870525906756bb5246f2b605d9b9625f77adfeffd595fd833c6008.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "nt_shcema_illustration"
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "次はあなた自身のことについて質問します。",
              "content": "「次へ」のボタンを押してください。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Next"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Questioner",
          "shuffle": true,
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "困ったときパートナーに助けを求めると、何かちょっとは（状況が）良くなる。",
                      "coding": "Q1"
                    },
                    {
                      "label": "私には、パートナーが私に対して好意的であるということを何度も何度も言ってくれることが必要だ。",
                      "coding": "Q2"
                    },
                    {
                      "label": "私はパートナーと親密になりたいのだが、いつの間にかついつい後ずさりしていることが多い。",
                      "coding": "Q3"
                    },
                    {
                      "label": "私が親密になりたいと望むほどには、パートナーは私と親密になりたいと思っていないと私は思う。",
                      "coding": "Q4"
                    },
                    {
                      "label": "私は、なぐさめやはげましなど、いろんなことをパートナーに求める。",
                      "coding": "Q5"
                    },
                    {
                      "label": "私が人ととても親密になりたいと強く望むがために、ときどき人はうんざりして私から離れていってしまう。",
                      "coding": "Q6"
                    },
                    {
                      "label": "私はパートナーとあまり親密にならないようにしている。",
                      "coding": "Q7"
                    },
                    {
                      "label": "私は、見捨てられるのではないかと心配になることはほとんどない。",
                      "coding": "Q8"
                    },
                    {
                      "label": "私はたいてい、パートナーと自分の問題や心配ごとを話し合う。",
                      "coding": "Q9"
                    },
                    {
                      "label": "私は、パートナーが必要なときにいつでも私のためにいてくれないとイライラする。",
                      "coding": "Q10"
                    },
                    {
                      "label": "私は、パートナーがあまりに自分と親密になってくると、とてもイライラしてしまう。",
                      "coding": "Q11"
                    },
                    {
                      "label": "私がパートナーのことを大切に思うほどには、パートナーが私のことを大切に思っていないのではないかと私は心配する。",
                      "coding": "Q12"
                    }
                  ],
                  "width": "7",
                  "anchors": [
                    "強く同意しない",
                    "同意しない",
                    "あまり同意しない",
                    "どちらでもない",
                    "やや同意する",
                    "同意する",
                    "強く同意する"
                  ],
                  "label": "以下の文は、あなたが親しい関係（例：恋人、親しい友人、家族など）において一般的に感じることに関するものです。それぞれの文について、どの程度同意するか、または同意しないかを示してください。以下の評価尺度を使用して、該当するものを選んでください。(強く同意しない、 同意しない、あまり同意しない、どちらでもない、やや同意する、同意する、強く同意する）",
                  "name": "ECR-RS"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "ECR-RS"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "友人の感情はあまり私に影響を与えない。",
                      "coding": "Q1"
                    },
                    {
                      "label": "何かで悲しんでいる友人と一緒にいると，たいてい悲しい気持ちになる。",
                      "coding": "Q2"
                    },
                    {
                      "label": "友人が何かでうまくいったときの幸せは理解できる。",
                      "coding": "Q3"
                    },
                    {
                      "label": "よくできたホラー映画の登場人物を見ると怖くなる。",
                      "coding": "Q4"
                    },
                    {
                      "label": "私はすぐに他人の感情に巻き込まれてしまう。",
                      "coding": "Q5"
                    },
                    {
                      "label": "友達が怯えているときに気づくのが難しいと感じる。",
                      "coding": "Q6"
                    },
                    {
                      "label": "他の人が泣いているのを見ても悲しくならない。",
                      "coding": "Q7"
                    },
                    {
                      "coding": "Q8",
                      "label": "他人の気持ちはまったく気にならない。"
                    },
                    {
                      "coding": "Q9",
                      "label": "誰かが「落ち込んでいる」とき，私はたいていその人の気持ちを理解できる。"
                    },
                    {
                      "coding": "Q10",
                      "label": "友達が怖がっているときは，たいてい察することができる。"
                    },
                    {
                      "coding": "Q11",
                      "label": "テレビや映画で悲しいものを見ると，よく悲しくなる。"
                    },
                    {
                      "coding": "Q12",
                      "label": "人に言われる前に，その人の気持ちがわかることがよくある。"
                    },
                    {
                      "coding": "Q13",
                      "label": "怒っている人を見ても，私の気持ちには何の影響もない。"
                    },
                    {
                      "coding": "Q14",
                      "label": "私は人が陽気な時がいつかたいてい理解できる。"
                    },
                    {
                      "coding": "Q15",
                      "label": "怖がっている友人と一緒にいると、私は怖く感じる傾向がある。"
                    },
                    {
                      "coding": "Q16",
                      "label": "私は友人が怒っているときはたいていすぐに気づくことができる。"
                    },
                    {
                      "coding": "Q17",
                      "label": "友人の感情に振り回されることが多い。"
                    },
                    {
                      "coding": "Q18",
                      "label": "友人の不幸が私に何かを感じさせることはない。"
                    },
                    {
                      "coding": "Q19",
                      "label": "私は普段，友人の気持ちに気づいていない。"
                    },
                    {
                      "coding": "Q20",
                      "label": "友達が幸せな時を見極めるのが難しい。"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "強く同意しない",
                    "やや同意しない",
                    "どちらでもない",
                    "やや同意する",
                    "強く同意する"
                  ],
                  "label": "ここに書かれている文章の内容に、あなたはどのぐらい同意するでしょうか。以下の評価尺度を使用して、該当するものを選んでください。  （強く同意しない、 やや同意しない、どちらでもない、やや同意する、強く同意する）",
                  "name": "BES"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "BES"
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "最後に、下記の性別・年齢・子育て経験の有無・学歴の回答をお願いいたします。",
              "content": "この記入をもって、調査への協力をお認め頂いたことになります。"
            },
            {
              "required": true,
              "type": "radio",
              "help": "",
              "name": "sbj-gender",
              "label": "あなたの性別を教えてください。",
              "options": [
                {
                  "label": "男性",
                  "coding": "male"
                },
                {
                  "label": "女性",
                  "coding": "female"
                },
                {
                  "label": "回答しない",
                  "coding": "other"
                }
              ]
            },
            {
              "required": true,
              "type": "input",
              "attributes": {
                "type": "number",
                "min": "12",
                "max": "99"
              },
              "label": "あなたの年齢を教えてください。",
              "name": "sbj-age"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたには子どもはいますか。",
              "options": [
                {
                  "label": "はい",
                  "coding": "yes"
                },
                {
                  "label": "いいえ",
                  "coding": "no"
                }
              ],
              "name": "child care"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたの最終学歴を教えてください。",
              "options": [
                {
                  "label": "中学校卒",
                  "coding": "jhs"
                },
                {
                  "label": "高校卒",
                  "coding": "hs"
                },
                {
                  "label": "専門学校卒",
                  "coding": "pro_col"
                },
                {
                  "label": "短期大学卒",
                  "coding": "jun_col"
                },
                {
                  "label": "4年制大学卒",
                  "coding": "col"
                },
                {
                  "label": "大学院修了",
                  "coding": "grad"
                },
                {
                  "label": "その他",
                  "coding": "other"
                }
              ],
              "name": "graduate"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Face seat"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "以上で調査を終了します。\nご協力ありがとうございました。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "End_page",
          "timeout": "1000"
        }
      ]
    }
  ]
})

// Let's go!
study.run()