# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| nickname           | string | null: false               |
| encrypted_password | string | null: false               |

### Association

- has_many :lists

## lists テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| title  | string | null: false |

### Association

- belongs_to :user
- has_many :tasks

## tasks テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| title       | string     | null: false                    |
| user        | references | null: false, foreign_key: true |
| list        | references | null: false, foreign_key: true |
| description | text       |                                |
| due_date    | datetime   |                                |

### Association

- belongs_to :list
