# テーブル設計

## users テーブル

| Column             | Type   | Options     |
| ------------------ | ------ | ----------- |
| nickname           | string | null: false |
| email              | string | null: false |
| encrypted_password | string | null: false |
| profile            | text   |             |
| birthday           | date   |             |

### Association

- has_many :task_items

## tasks テーブル

| Column | Type       | Options     |
| ------ | ---------- | ----------- |
| title  | string     | null: false |
| user   | references | null: false |

### Association

- belongs_to :user
- has_many :tasks

## task_items テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| task        | references | null: false, foreign_key: true |
| completed   | boolean    | default: false                 |
| description | text       |                                |
| due_date    | date       |                                |

### Association

- belongs_to :task
