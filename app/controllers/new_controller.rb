class NewController < ApplicationController
  respond_to :html, :json
  def home
  end
  def edit
  	 @info=Userinfo.find(params[:id])
  end

  def delete
    Userinfo.find(params[:id]).delete
     redirect_to(:action =>'showuserpro')
  end

  def update
     @info=Userinfo.find(params[:id])
     @info.update_attributes(params[:info])
     @info.save
     
   
  end

  def showmobile
  	
  end
  def showlaptop
  end
  def showcamera
  end

  def userprofile
   @info=Userinfo.new(params[:info])
   @info.save
  end 
  def userpro
    
    end
  def showuserpro
   @info=Userinfo.find(:all)

  end

end
