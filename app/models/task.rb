class Task < ApplicationRecord
  belongs_to :user
  has_one :taskitem
  has_many_attached :images

  validates :title, presence: true

end
