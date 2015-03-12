Search.setIndex({envversion:46,filenames:["datastore-api","datastore-batches","datastore-dataset","datastore-entities","datastore-keys","datastore-queries","datastore-transactions","gcloud-api","index","storage-acl","storage-api","storage-blobs","storage-buckets"],objects:{"gcloud.connection":{API_BASE_URL:[7,7,1,""],Connection:[7,2,1,""]},"gcloud.connection.Connection":{USER_AGENT:[7,1,1,""],credentials:[7,1,1,""],http:[7,1,1,""]},"gcloud.credentials":{generate_signed_url:[7,5,1,""],get_credentials:[7,5,1,""],get_for_service_account_json:[7,5,1,""],get_for_service_account_p12:[7,5,1,""]},"gcloud.datastore":{"__init__":[0,0,0,"-"],api:[0,0,0,"-"],batch:[1,0,0,"-"],connection:[0,0,0,"-"],dataset:[2,0,0,"-"],entity:[3,0,0,"-"],helpers:[0,0,0,"-"],key:[4,0,0,"-"],query:[5,0,0,"-"],transaction:[6,0,0,"-"]},"gcloud.datastore.__init__":{set_defaults:[0,5,1,""]},"gcloud.datastore.api":{"delete":[0,5,1,""],allocate_ids:[0,5,1,""],get:[0,5,1,""],put:[0,5,1,""]},"gcloud.datastore.batch":{Batch:[1,2,1,""]},"gcloud.datastore.batch.Batch":{"delete":[1,4,1,""],add_auto_id_entity:[1,4,1,""],begin:[1,4,1,""],commit:[1,4,1,""],connection:[1,1,1,""],current:[1,6,1,""],dataset_id:[1,1,1,""],mutation:[1,1,1,""],put:[1,4,1,""],rollback:[1,4,1,""]},"gcloud.datastore.connection":{Connection:[0,2,1,""]},"gcloud.datastore.connection.Connection":{API_URL_TEMPLATE:[0,1,1,""],API_VERSION:[0,1,1,""],allocate_ids:[0,4,1,""],begin_transaction:[0,4,1,""],build_api_url:[0,4,1,""],commit:[0,4,1,""],lookup:[0,4,1,""],rollback:[0,4,1,""],run_query:[0,4,1,""]},"gcloud.datastore.dataset":{Dataset:[2,2,1,""]},"gcloud.datastore.dataset.Dataset":{"delete":[2,4,1,""],batch:[2,4,1,""],get:[2,4,1,""],key:[2,4,1,""],put:[2,4,1,""],query:[2,4,1,""],transaction:[2,4,1,""]},"gcloud.datastore.entity":{Entity:[3,2,1,""]},"gcloud.datastore.entity.Entity":{exclude_from_indexes:[3,1,1,""],kind:[3,1,1,""]},"gcloud.datastore.helpers":{entity_from_protobuf:[0,5,1,""],key_from_protobuf:[0,5,1,""]},"gcloud.datastore.key":{Key:[4,2,1,""]},"gcloud.datastore.key.Key":{"__init__":[4,4,1,""],completed_key:[4,4,1,""],dataset_id:[4,1,1,""],flat_path:[4,1,1,""],id:[4,1,1,""],id_or_name:[4,1,1,""],is_partial:[4,1,1,""],kind:[4,1,1,""],name:[4,1,1,""],namespace:[4,1,1,""],parent:[4,1,1,""],path:[4,1,1,""],to_protobuf:[4,4,1,""]},"gcloud.datastore.query":{Iterator:[5,2,1,""],Query:[5,2,1,""]},"gcloud.datastore.query.Iterator":{next_page:[5,4,1,""]},"gcloud.datastore.query.Query":{OPERATORS:[5,1,1,""],add_filter:[5,4,1,""],ancestor:[5,1,1,""],dataset_id:[5,1,1,""],fetch:[5,4,1,""],filters:[5,1,1,""],group_by:[5,1,1,""],keys_only:[5,4,1,""],kind:[5,1,1,""],namespace:[5,1,1,""],order:[5,1,1,""],projection:[5,1,1,""]},"gcloud.datastore.transaction":{Transaction:[6,2,1,""]},"gcloud.datastore.transaction.Transaction":{begin:[6,4,1,""],commit:[6,4,1,""],current:[6,6,1,""],id:[6,1,1,""],rollback:[6,4,1,""]},"gcloud.exceptions":{BadRequest:[7,3,1,""],ClientError:[7,3,1,""],Conflict:[7,3,1,""],Forbidden:[7,3,1,""],GCloudError:[7,3,1,""],InternalServerError:[7,3,1,""],LengthRequired:[7,3,1,""],MethodNotAllowed:[7,3,1,""],MovedPermanently:[7,3,1,""],NotFound:[7,3,1,""],NotImplemented:[7,3,1,""],NotModified:[7,3,1,""],PreconditionFailed:[7,3,1,""],Redirection:[7,3,1,""],RequestRangeNotSatisfiable:[7,3,1,""],ResumeIncomplete:[7,3,1,""],ServerError:[7,3,1,""],ServiceUnavailable:[7,3,1,""],TemporaryRedirect:[7,3,1,""],TooManyRequests:[7,3,1,""],Unauthorized:[7,3,1,""],eklass:[7,1,1,""],make_exception:[7,5,1,""]},"gcloud.exceptions.BadRequest":{code:[7,1,1,""]},"gcloud.exceptions.Conflict":{code:[7,1,1,""]},"gcloud.exceptions.Forbidden":{code:[7,1,1,""]},"gcloud.exceptions.GCloudError":{code:[7,1,1,""],errors:[7,1,1,""]},"gcloud.exceptions.InternalServerError":{code:[7,1,1,""]},"gcloud.exceptions.LengthRequired":{code:[7,1,1,""]},"gcloud.exceptions.MethodNotAllowed":{code:[7,1,1,""]},"gcloud.exceptions.MovedPermanently":{code:[7,1,1,""]},"gcloud.exceptions.NotFound":{code:[7,1,1,""]},"gcloud.exceptions.NotImplemented":{code:[7,1,1,""]},"gcloud.exceptions.NotModified":{code:[7,1,1,""]},"gcloud.exceptions.PreconditionFailed":{code:[7,1,1,""]},"gcloud.exceptions.RequestRangeNotSatisfiable":{code:[7,1,1,""]},"gcloud.exceptions.ResumeIncomplete":{code:[7,1,1,""]},"gcloud.exceptions.ServiceUnavailable":{code:[7,1,1,""]},"gcloud.exceptions.TemporaryRedirect":{code:[7,1,1,""]},"gcloud.exceptions.TooManyRequests":{code:[7,1,1,""]},"gcloud.exceptions.Unauthorized":{code:[7,1,1,""]},"gcloud.storage":{"__init__":[10,0,0,"-"],acl:[9,0,0,"-"],blob:[11,0,0,"-"],bucket:[12,0,0,"-"],connection:[10,0,0,"-"],iterator:[10,0,0,"-"]},"gcloud.storage.__init__":{get_bucket:[10,5,1,""],get_connection:[10,5,1,""],set_default_bucket:[10,5,1,""],set_default_connection:[10,5,1,""],set_default_project:[10,5,1,""],set_defaults:[10,5,1,""]},"gcloud.storage.acl":{ACL:[9,2,1,""],BucketACL:[9,2,1,""],DefaultObjectACL:[9,2,1,""],ObjectACL:[9,2,1,""]},"gcloud.storage.acl.ACL":{add_entity:[9,4,1,""],all:[9,4,1,""],all_authenticated:[9,4,1,""],clear:[9,4,1,""],domain:[9,4,1,""],entity:[9,4,1,""],entity_from_dict:[9,4,1,""],get_entities:[9,4,1,""],get_entity:[9,4,1,""],group:[9,4,1,""],has_entity:[9,4,1,""],loaded:[9,1,1,""],reload:[9,4,1,""],reset:[9,4,1,""],save:[9,4,1,""],user:[9,4,1,""]},"gcloud.storage.acl.BucketACL":{clear:[9,4,1,""],reload:[9,4,1,""],save:[9,4,1,""]},"gcloud.storage.acl.ObjectACL":{clear:[9,4,1,""],reload:[9,4,1,""],save:[9,4,1,""]},"gcloud.storage.blob":{Blob:[11,2,1,""]},"gcloud.storage.blob.Blob":{"delete":[11,4,1,""],CHUNK_SIZE:[11,1,1,""],CUSTOM_PROPERTY_ACCESSORS:[11,1,1,""],acl:[11,1,1,""],cache_control:[11,1,1,""],component_count:[11,1,1,""],connection:[11,1,1,""],content_disposition:[11,1,1,""],content_encoding:[11,1,1,""],content_language:[11,1,1,""],content_type:[11,1,1,""],crc32c:[11,1,1,""],download_as_string:[11,4,1,""],download_to_file:[11,4,1,""],download_to_filename:[11,4,1,""],etag:[11,1,1,""],exists:[11,4,1,""],generate_signed_url:[11,4,1,""],generation:[11,1,1,""],id:[11,1,1,""],make_public:[11,4,1,""],md5_hash:[11,1,1,""],media_link:[11,1,1,""],metadata:[11,1,1,""],metageneration:[11,1,1,""],owner:[11,1,1,""],path:[11,1,1,""],public_url:[11,1,1,""],rename:[11,4,1,""],self_link:[11,1,1,""],size:[11,1,1,""],storage_class:[11,1,1,""],time_deleted:[11,1,1,""],updated:[11,1,1,""],upload_from_file:[11,4,1,""],upload_from_filename:[11,4,1,""],upload_from_string:[11,4,1,""]},"gcloud.storage.bucket":{Bucket:[12,2,1,""]},"gcloud.storage.bucket.Bucket":{"delete":[12,4,1,""],CUSTOM_PROPERTY_ACCESSORS:[12,1,1,""],acl:[12,1,1,""],configure_website:[12,4,1,""],connection:[12,1,1,""],copy_blob:[12,4,1,""],default_object_acl:[12,1,1,""],delete_blob:[12,4,1,""],delete_blobs:[12,4,1,""],disable_logging:[12,4,1,""],disable_website:[12,4,1,""],enable_logging:[12,4,1,""],etag:[12,1,1,""],exists:[12,4,1,""],get_all_blobs:[12,4,1,""],get_blob:[12,4,1,""],get_cors:[12,4,1,""],get_default_object_acl:[12,4,1,""],get_lifecycle:[12,4,1,""],get_logging:[12,4,1,""],id:[12,1,1,""],iterator:[12,4,1,""],location:[12,1,1,""],make_public:[12,4,1,""],metageneration:[12,1,1,""],new_blob:[12,4,1,""],owner:[12,1,1,""],patch:[12,4,1,""],path:[12,1,1,""],path_helper:[12,6,1,""],project_number:[12,1,1,""],self_link:[12,1,1,""],storage_class:[12,1,1,""],time_created:[12,1,1,""],update_cors:[12,4,1,""],update_lifecycle:[12,4,1,""],upload_file:[12,4,1,""],upload_file_object:[12,4,1,""],versioning_enabled:[12,1,1,""]},"gcloud.storage.connection":{Connection:[10,2,1,""]},"gcloud.storage.connection.Connection":{API_BASE_URL:[10,1,1,""],API_URL_TEMPLATE:[10,1,1,""],API_VERSION:[10,1,1,""],api_request:[10,4,1,""],build_api_url:[10,4,1,""],create_bucket:[10,4,1,""],delete_bucket:[10,4,1,""],get_bucket:[10,4,1,""]},"gcloud.storage.iterator":{Iterator:[10,2,1,""]},"gcloud.storage.iterator.Iterator":{PAGE_TOKEN:[10,1,1,""],RESERVED_PARAMS:[10,1,1,""],get_items_from_response:[10,4,1,""],get_next_page_response:[10,4,1,""],get_query_params:[10,4,1,""],has_next_page:[10,4,1,""],reset:[10,4,1,""]},gcloud:{"__init__":[7,0,0,"-"],connection:[7,0,0,"-"],credentials:[7,0,0,"-"],exceptions:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","class","Python class"],"3":["py","exception","Python exception"],"4":["py","method","Python method"],"5":["py","function","Python function"],"6":["py","staticmethod","Python static method"],"7":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:class","3":"py:exception","4":"py:method","5":"py:function","6":"py:staticmethod","7":"py:data"},terms:{"3xx":7,"4xx":7,"5xx":7,"__init__":[0,4,7,10],"__key__":5,"_aclent":9,"_blobiter":12,"_datastore_v1_pb2":[0,1,4],"_dra_bucket":11,"_helper":[11,12],"_propertymixin":[11,12],"_serviceaccountcredenti":7,"abstract":[1,5,6,7],"boolean":[0,4,5,7,9,10,11,12],"break":10,"byte":[1,3,5,11],"case":[1,3,10],"class":[0,1,2,3,4,5,6,7,9,10,11,12],"default":[0,1,5,6,7,9,10,11,12],"final":4,"float":5,"import":[0,1,5,6,8,9,10,12],"int":[7,11],"long":[7,11,12],"new":[0,4,7,9,10,11,12],"public":[11,12],"return":[0,1,3,4,5,6,7,9,10,11,12],"short":9,"static":[1,6,12],"true":[0,4,6,7,9,10,11,12],"while":10,abl:[7,8,9],about:[7,11,12],absenc:11,accept:[7,10],access:[7,9,10,11,12],accesslog:12,accessor:[11,12],accident:12,account:[7,9],act:3,actual:[0,3,9,10,12],add:[1,7,9,12],add_auto_id_ent:1,add_ent:9,add_filt:[0,5],addit:[7,10],address:9,advanc:[0,7],after:[3,6,9],again:3,against:[5,7],agent:7,akin:[0,3,10],alia:7,all:[0,3,4,9,10,11,12],all_authent:9,alloc:0,allocate_id:0,allocateid:0,allow:[0,3,7,8,11],allus:9,along:0,alread:1,alreadi:[1,6,9,10,12],also:[1,6,7,9,12],altern:9,amount:11,ancestor:5,ani:[0,1,3,7,9,11],anoth:9,anyth:[9,12],api_access_endpoint:7,api_bas:0,api_base_url:[0,7,10],api_request:10,api_url_templ:[0,10],api_vers:[0,10],app:[7,9,10],app_credenti:[0,10],appar:12,appassertioncredenti:7,appendix:11,appengin:7,appli:[0,5],applic:[9,11],approv:12,apt:8,arbitrari:11,arg:10,argument:[0,4,7,9,10],around:[7,11],ask:10,assembl:10,assert:6,assign:[1,3,5,6,12],associ:[4,7,10],attach:7,attempt:12,attribut:[0,7,12],auth:7,authent:[0,7,9,10],author:7,authorized_us:7,automat:[1,3,6],avail:[6,11,12],back:[0,1,3,6,10],backend:[0,3,12],bad:7,badrequest:7,bamboo:[0,10],base:[0,1,2,3,4,5,6,7,9,10,11,12],base_url:0,basi:9,basic:[0,4,7],bcp47:11,bearer:7,becaus:6,been:[1,4,5,9,11],befor:11,beforehand:8,begin:[0,1,6,10,11],begin_transact:0,begintransact:0,begintransactionrespons:0,begun:6,belong:[0,9,11],between:[0,10],blank:[9,12],blob:[7,8,9,10],blob_valu:[1,3],block:[1,6],bodi:[7,10],both:0,breviti:9,bucket1:[9,10],bucket1_nam:9,bucket2:[9,10],bucket2_nam:9,bucket:[7,8,9,10,11],bucket_nam:[9,10,12],bucketacl:9,build:[0,1,6,9,10],build_api_url:[0,10],built:[1,3],builtin:3,bulk:[1,6],bunch:[0,9],bundl:0,cach:11,cache_control:11,cachecontrol:11,call:[0,1,6,7,9,10,12],callabl:12,callback:12,can:[0,1,3,4,6,7,8,9,10,11,12],cannot:[0,10],capabl:[0,7],certain:11,chain:9,chang:[3,9,12],check:[7,9,12],checksum:11,child:4,chunk:11,chunk_siz:11,clear:9,click:[0,10],client:[0,7],client_email:7,client_id:7,client_secret:7,clienterror:7,clientsecret:7,clone:8,close:7,code:[0,1,6,7,10],collect:1,com:[7,8,9,10,11,12],come:0,command:7,commit:[0,1,6],compani:9,compat:9,complet:[0,1,6,12],completed_kei:4,compon:[10,11],component_count:11,componentcount:11,comput:[7,10],concept:[0,10,11,12],concret:7,condit:0,confict:10,configur:12,configure_websit:12,conflict:[7,10,12],connection_typ:7,consist:[0,4,9],consol:[0,7,10],construct:[0,1,9,10],constructor:4,consum:10,contain:[0,7,9,10,12],content:[7,8,10,11],content_disposit:11,content_encod:11,content_languag:11,content_md5:7,content_typ:[7,10,11],contentdisposit:11,contentencod:11,contentlanguag:11,contenttyp:11,context:[0,1,6],control:[5,9,11],conveni:[0,2,5],convert:[3,10],copi:[0,4,11,12],copy_blob:12,cor:12,correct:10,correspond:[1,4,7,9,10,11,12],costli:11,could:[3,11],cousin:7,cowardli:12,cowork:9,coworker1:9,coworker2:9,crc32c:11,creat:[0,1,3,4,5,6,7,9,10,11,12],create_bucket:10,credenti:0,crypto:8,current:[0,1,3,4,5,6,7,9,10,11,12],cursor:[0,5],custom:[7,9,11,12],custom_property_accessor:[11,12],data:[0,3,4,5,7,8,9,10,11,12],databas:[0,3,8],dataset:[0,1],dataset_id:[0,1,2,4,5,6],datastore_pb:0,datastoreservic:0,datetim:[5,7,11],deal:0,decod:3,def:10,default_object_acl:12,defaultobjectacl:[9,12],defer:[0,2],defin:[7,10,11],delet:[0,1,2,3,6,10,11,12],delete_blob:[11,12],delete_bucket:10,delimit:12,delimt:12,deliveri:12,demand:[11,12],demonstr:10,depend:11,deriv:[0,6],descend:5,describ:[7,12],destination_bucket:12,detail:[0,7,10,11,12],detect:7,determin:[6,10,11,12],dev:8,develop:[0,10,12],dict:[3,4,7,9,10,11,12],dictionari:[3,7,9,10],differ:[7,10],directli:[0,7,10],directori:12,disabl:12,disable_log:12,disable_websit:12,disk:10,disposit:11,do_some_work:[1,6],doc:[0,7,10,11,12],document:[7,11],doe:[0,1,4,10,12],doesn:[6,9,10,12],doesnt:12,domain:[9,12],don:[1,6,11,12],done:[1,9,10],download:[0,7,10,11],download_as_str:[10,11],download_to_fil:11,download_to_filenam:11,duplic:[3,11],dur:1,durabl:[11,12],durable_reduced_avail:[11,12],dure:1,each:[3,7,9,12],earli:10,effect:[6,11],either:[0,1,4,6,7,9,10,11,12],eklass:7,element:[4,6],els:[6,12],elsewher:10,empti:[0,7,10,12],emul:12,enabl:[0,12],enable_log:12,encod:[3,11],end:3,end_cursor:5,endpoint:10,engin:[7,10],enter:6,entir:3,entiti:[0,1,2],entity1:[1,6],entity2:[1,6],entity_dict:9,entity_from_dict:9,entity_from_protobuf:0,entity_typ:9,entitykind:[0,3,4],entri:[1,9,12],enviro:10,environ:[0,7,10],environmenterror:0,equal:0,equival:[5,12],error:[1,6,7],establish:10,etag:[11,12],etc:[9,10],even:[4,9],eventu:0,everi:1,everyth:8,exampl:[0,1,5,6,9,10,12],except:[1,6],exclude_from_index:3,execut:[5,6],exist:[0,1,3,4,6,9,10,11,12],exit:[1,6],expect:7,expect_json:10,expir:[7,11],explicitli:[0,1,6,7,10,11],express:5,extra:[3,4],extra_param:10,extrem:12,facilit:[0,10],factori:[0,2,7,9,10],fail:[6,7],fall:[0,10],fals:[0,6,9,10,11,12],far:1,favor:0,fetch:[0,5],fetch_pag:0,few:10,fewer:10,field:[3,5,9,11,12],file:[0,7,8,10,11,12],file_obj:[11,12],filenam:[11,12],fill:0,filter:[5,12],find:[10,12],fine:5,first:[7,10,11,12],flag:[7,9],flat_path:4,follow:[1,6,7,9],foo:4,forbidden:7,forc:12,form:5,format:[7,11,12],found:[7,10,12],fresh:9,friendli:0,from:[0,1,3,4,5,6,7,8,9,10,11,12],frozenset:10,fstat:11,full:[4,9,10],fulli:8,futur:[0,10,12],gce:7,gcloud_bucket_nam:10,gcloud_project:10,gcloud_tests_dataset_id:[0,10],gcloud_tests_project_id:[0,10],gclouderror:7,gener:[0,6,7,10,11],generate_signed_url:[7,11],get:[0,2,3,5,7],get_all_blob:[10,12],get_all_bucket:10,get_blob:[10,12],get_bucket:[8,9,10,12],get_connect:[7,9,10,12],get_cor:12,get_credenti:7,get_default_object_acl:12,get_ent:9,get_for_service_account_json:7,get_for_service_account_p12:7,get_items_from_respons:10,get_lifecycl:12,get_log:12,get_next_page_respons:10,get_query_param:10,getter:[1,4,6,7,10,11,12],git:8,github:[0,8,10],give:11,given:[0,5,7,10,11,12],googl:[0,7,8,9,10,11,12],google_application_credenti:[0,7,10],googleapi:[7,10],googlecloudplatform:8,googlecredenti:7,grant:9,grant_:9,grant_own:9,grant_read:9,grant_writ:9,granular:9,group:[1,5,9],group_bi:5,guess:11,guess_typ:11,handl:[7,11,12],happen:9,has_ent:9,has_next_pag:10,hash:[7,11],have:[0,4,6,7,8,9,10,11,12],header:[7,11],here:10,hierarchi:12,hood:[0,7,9],host:12,howev:[0,1,3,6,7],html:[7,11,12],http:[0,7,10,11,12],httplib2:7,id_or_nam:4,ident:9,identifi:[0,4,9],idiomat:7,ietf:[11,12],imagin:9,immut:4,implement:[7,10],implicit:[4,5,7,10,11],implicitli:[0,7,10],includ:[0,5,10],incompat:0,incomplet:7,incomplete_kei:0,increas:9,index:[3,12],indic:[0,4,7],individu:[0,10,12],infer:0,info:[11,12],inform:7,infrastructur:8,initi:[0,4,6],insert:10,insert_auto_id:[1,6],insid:[1,6,12],instanc:[0,1,3,4,7,12],instanti:10,instead:[7,9,10],integ:[0,4,5,11,12],intend:7,intern:[0,7],internalservererror:7,invalid:[5,10],invok:2,is_parti:[4,6],is_valid:10,isn:[10,12],isol:[0,6],item:10,iter:[5,9],itself:1,jame:5,jpg:12,json:[0,7,10],json_api:[7,11,12],json_credentials_path:7,just:[0,3,10,11,12],keep:1,kei:[0,1,2,3],key3:1,key_from_protobuf:0,key_pb:0,keys_onli:5,keyword:[0,4],kind:[0,3,4,5],kitten:12,know:3,known:[7,9],kwarg:[2,4,10],lambda:12,languag:11,larg:11,last:4,latest:10,left:9,length:[4,7],lengthrequir:7,level:[0,5,7],libssl:8,lifecycl:[11,12],like:[0,3,9,11,12],limit:5,line:7,list:[0,1,4,5,7,9,10,12],live:[0,10,11],load:9,local:[9,10,12],locat:12,log:[11,12],logbucket:12,logobjectprefix:12,look:[0,10],lookup:[0,9],low:5,machin:[0,10],mai:[0,4,7],mail:[7,9],main:[0,10,12],main_page_suffix:12,make:[0,1,7,9,10,11,12],make_except:7,make_publ:[11,12],manag:[1,6,8],mani:7,manipul:9,manual:6,map:[0,1,5,7,11,12],match:[0,1,5,10],max_result:12,maximum:12,md5:[7,11],md5_hash:11,mean:[3,6,7,11],media:11,media_link:11,medialink:11,messag:7,metadata:[9,11],metagener:[11,12],method:[0,1,2,6,7,9,10,11,12],methodnotallow:7,might:3,mime:10,mimetyp:11,miss:[0,2],modifi:7,modul:[0,10],more:[0,5,10,12],more_result:[0,5],most:10,mount:10,move:7,movedperman:7,multipl:11,must:[7,11,12],mutabl:[3,9],mutat:[0,1,6],mutation_pb:0,mutationresult:0,mutuat:[1,6],my_other_acl:9,myitemclass:10,myiter:10,mykind:0,name:[0,3,4,5,7,8,10,11,12],namespac:[0,4,5],necessari:6,need:[0,1,7,10,12],new_blob:[8,10,12],new_nam:[11,12],newli:[10,11],next:10,next_pag:5,nextpagetoken:10,non:[0,7,8,9],none:[0,1,2,3,4,5,6,7,9,10,11,12],nonetyp:[4,7,10,11],not_found_pag:12,note:9,notfound:[7,10,11,12],notimpl:7,notimplementederror:9,notmodifi:7,now:[9,10],num_id:0,num_retri:11,number:[0,11,12],oauth2:[0,7],oauth2client:[0,7],oauth2credenti:[0,7],object:[0,1,2,3,4,5,7,9,10],object_prefix:12,objectacl:9,obtain:0,occur:0,octet:11,odd:4,off:10,offici:3,offset:5,old:11,on_error:12,onc:[0,1,6,10,12],onli:[0,3,4,5,7,10,11,12],open:[11,12],openssl:8,oper:[1,5,6,10,11,12],operatiuon:1,option:[0,2,3,5,7,10,11,12],order:[0,1,5,7,9,10,12],org:[7,9,11,12],other:[3,7,9,10,11],other_arg:10,otherwis:12,our:[1,2,11,12],over:[0,1,5,10],overrid:10,overridden:[1,9,10],overriden:10,overwrit:11,own:9,owner:[9,11,12],p12:7,packag:0,page:[5,10,12],page_token:10,pagetoken:10,pair:9,param:0,paramet:[0,1,2,3,4,5,6,7,9,10,11,12],parent:[3,4],parent_kei:4,pars:10,part:[0,1,5,9],partial:[0,1,3,4],particular:[0,7,9,10],particularli:11,pass:[0,2,4,5,7,11,12],patch:12,path:[0,4,7,10,11,12],path_arg:[2,4],path_help:12,per:[9,11],period:11,perman:7,permiss:9,persist:3,person:[0,5,8],piec:10,pip:[0,8,10],pkcs12:7,plain:11,plan:10,platform:7,point:[7,9],pointer:[0,3,7,10],polici:[11,12],possibl:[3,10],post:10,preced:7,precompil:8,precondit:7,preconditionfail:7,prefix:12,prepend:5,prevent:12,primit:10,print:[9,10,12],privat:[0,7,10],private_kei:7,private_key_id:7,private_key_path:7,probabl:12,process:10,product:7,project:[0,5,8,9,10,12],project_id:10,project_numb:12,projectnumb:12,propag:[11,12],proper:10,properti:[0,1,3,5,10,11,12],property_nam:5,protobuf:[0,1,4,5],protocol:7,provid:[0,6,7,9,10,11,12],proxi:2,public_url:11,publicli:11,purpos:10,put:[0,1,2,3,6,8,12],pycrypto:8,pyopenssl:8,python2:[1,3],python3:[1,3],python:[0,3,7,8,10,12],queri:[0,2],query_param:10,query_pb:0,quickli:[0,10,12],race:0,rais:[0,1,4,5,6,9,10,11,12],rang:7,rather:0,read:[0,9,10,11,12],readi:7,realli:12,recurs:12,redirect:7,reduc:[11,12],refer:[6,7,9],referenc:7,refresh:7,refresh_token:7,refus:12,registr:[0,10],regress:[0,10],regular:3,rel:12,relat:[0,3,7,8,9,12],reli:[3,10],reload:[9,12],remain:4,rememb:1,remot:[10,12],remov:[1,9],renam:11,replac:1,repositori:8,repres:[0,1,3,4,5,6,7,9,10,12],represent:4,request:[0,1,7,10,11,12],requestrangenotsatisfi:7,requir:[2,3,4,5,7,10,11],reserved_param:10,reset:[9,10],resourc:[7,10,11],respons:[7,10,12],rest:10,restrict:5,result:[0,5,10],resum:7,resumeincomplet:7,retri:11,retriev:[0,3,11,12],revok:9,revoke_:9,revoke_own:9,revoke_read:9,revoke_writ:9,rewind:11,rfc2616:[7,11,12],rfc4960:11,rfc6266:11,rfc7231:11,rfc7234:11,rfc:[11,12],role:[9,11,12],roll:[1,6],rollback:[0,1,6],root:[0,12],row:[0,3],rpc:0,rule:[9,12],run_queri:0,runqueri:0,runtim:12,sai:12,salli:5,same:[0,1,4,6,9,10,11,12],sampl:[0,10],satisfi:7,save:[0,1,3,6,9],schemaless:8,scope:[0,7],script:[0,10],search:[0,10],sec10:7,secret:7,section:[11,12],see:[0,7,10,11,12],seek:[7,11],self:10,self_link:[11,12],selflink:[11,12],send:[0,1,9,10,12],sent:1,separ:12,sequenc:[3,5,12],serializ:0,serv:5,server:[0,1,7],servererror:7,servic:[3,7],service_account:7,serviceunavail:7,set:[0,1,3,4,5,6,7,9,10,11,12],set_default:[0,10],set_default_bucket:10,set_default_connect:[0,10],set_default_dataset_id:0,set_default_namespac:0,set_default_project:10,setup:8,sever:10,share:7,shell:[0,10],shift:[0,10],shortcut:[0,10,12],should:[0,7,10,11,12],shouldn:[0,10],side:6,sign:[7,9,11],signedjwtassertioncredenti:7,simpl:7,simpli:7,simplifi:10,singl:[0,1,3,5,7],size:11,skipped_result:0,slow:11,snapshot:0,snippet:[1,6],some:[0,10],someexcept:6,somehow:12,someth:12,sorri:10,sort:5,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12],special:9,specif:[7,9,11],specifi:[5,10],specifyingloc:12,stack:6,standard:[10,11,12],start:0,start_cursor:5,state:[1,5],statement:[1,6],statu:[7,12],step:3,still:[9,10],stop:0,storag:7,storage_class:[11,12],storageclass:[11,12],store:[1,3,5,6,7,8,9,11,12],str:[1,3,5],stream:11,string:[0,2,3,4,5,6,7,9,10,11,12],string_valu:1,strong:0,stuff:12,subclass:[3,7,9,10],submit:12,succeed:6,successfulli:6,sudo:8,superflu:7,suppli:5,support:10,suppress:12,sure:[1,12],system:[10,12],take:[3,5,12],talk:7,techniqu:12,templat:[0,10],temporari:7,temporarili:11,temporaryredirect:7,test:[0,7,8,10],text:[1,3,7,11,12],text_valu:3,than:[0,12],thei:[7,9],them:[0,1],thi:[0,1,3,5,6,7,8,9,10,11,12],thing:[6,10],those:[1,6,10,11,12],through:[5,10],time:[6,11],time_cr:12,time_delet:11,timecr:12,timedelet:11,timedelta:[7,11],timestamp:[11,12],to_protobuf:[0,4],togeth:9,token:7,too:7,tool:[7,11,12],toomanyrequest:7,topmost:[1,6],track:1,transact:[0,1,2],transaction_id:0,transat:0,transport:[7,10],tripl:0,troubl:8,tupl:[0,3,4,5,7,9],two:[1,6],txt:[7,8,10,12],type:[0,1,3,4,5,6,7,9,10,11,12],typic:[0,7,10,12],ubuntu:8,unauthor:7,unavail:7,under:[0,7,9],underli:11,understand:[0,7],unicod:[1,3],uniqu:[0,9,11],unless:[4,11],unmarshal:0,until:[6,7,11],updat:[1,11,12],update_cor:12,update_lifecycl:12,upload:[10,11,12],upload_contents_from_str:8,upload_fil:[10,12],upload_file_object:12,upload_from_fil:11,upload_from_filenam:11,upload_from_str:[10,11],upon:[1,6],upsert:6,uri:[7,11,12],url:[0,7,10,11,12],use_json:7,user:[0,7,9,11],user_ag:7,usual:0,utf:[3,11],v1beta2:0,val:0,valid:11,valu:[0,1,3,5,7,9,10,11,12],valueerror:[0,1,4,5,6,12],variabl:[0,7,10],verb:[7,11],veri:11,version:[0,10,11,12],versioning_en:12,via:[0,10],wai:10,walk:10,want:[1,6,8,9,10,11,12],websit:12,well:[6,7,10,12],what:10,when:[0,1,3,6,7,9,10,11,12],whenev:11,where:[0,5,10,12],whether:[9,10,11,12],which:[0,1,3,5,7,9,10,11,12],who:9,whole:12,whose:[3,4],within:[6,11],without:[1,3,6,7,9],won:[6,9,10],work:[1,9,10,12],world:0,would:[3,7],wouldn:0,wrapper:[2,7,11],write:[9,10,11],wrote:0,www:[7,10,12],xact:6,yield:10,you:[0,1,3,6,7,8,9,10,11,12],your:[0,8,10,12]},titles:["Datastore","Batches","Dataset","Entities","Keys","Queries","Transactions","GCloud Package","Getting started","ACL","Storage","Blobs / Objects","Buckets"],titleterms:{"function":0,"try":[0,10],acl:9,api:0,batch:1,blob:11,bucket:12,cloud:[0,8,10],connect:[0,7,10],credenti:7,dataset:2,datastor:[0,8],demo:[0,10],entiti:3,except:7,gcloud:[0,7,10],get:8,helper:0,instal:[0,10],interact:0,iter:10,kei:4,librari:[0,10],object:11,packag:7,queri:5,run:[0,10],second:[0,10],start:8,storag:[8,10],transact:6,yourself:[0,10]}})