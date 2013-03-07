class AddColumnToUserinfo < ActiveRecord::Migration
  def change
    add_column :userinfos, :email, :string
    add_column :userinfos, :mobileNo, :integer
  end
end
