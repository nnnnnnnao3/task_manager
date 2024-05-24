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

| Column    | Type       | Options     |
| --------- | ---------- | ----------- |
| task_name | string     | null: false |
| user      | references | null: false |

### Association

- belongs_to :user
- has_many :task_items

## task_items テーブル

| Column    | Type    | Options        |
| --------- | ------- | -------------- |
| completed | boolean | default: false |
| task      | string  | null: false    |
| memo      | string  |                |
| due_date  | date    |                |

### Association

- belongs_to :task
