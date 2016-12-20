class CupcakeSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :thumbnail, :weight
  has_many :ratings, embed: :ids
end
