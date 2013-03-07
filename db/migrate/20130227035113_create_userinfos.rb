class CreateUserinfos < ActiveRecord::Migration
  def change
    create_table :userinfos do |t|
      t.string :name 
      t.string :city

      t.timestamps
    end
  end
end
