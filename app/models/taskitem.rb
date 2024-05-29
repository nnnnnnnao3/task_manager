class Taskitem < ApplicationRecord
  belongs_to :task
  has_one_attached :image
end
