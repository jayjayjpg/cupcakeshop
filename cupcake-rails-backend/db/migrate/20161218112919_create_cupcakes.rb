class CreateCupcakes < ActiveRecord::Migration[5.0]
  def change
    create_table :cupcakes do |t|
      t.string :title
      t.text :text
      t.string :thumbnail
      t.integer :weight

      t.timestamps
    end
  end
end
