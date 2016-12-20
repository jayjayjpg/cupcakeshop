class RatingSerializer < ActiveModel::Serializer
  attributes :id, :value, :title, :description, :name
  belongs_to :cupcake
end
